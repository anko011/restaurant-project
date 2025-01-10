import {useEffect, useState} from "react";
import {Dialog} from "primereact/dialog";
import {Button} from "primereact/button";
import {InputNumber} from "primereact/inputnumber";
import {Nullable} from "primereact/ts-helpers";
import {AutoComplete, AutoCompleteCompleteEvent} from "primereact/autocomplete";
import {Dropdown} from "primereact/dropdown";

//TODO: импорты
import {type TablesInfo} from '@repo/tables';
import {type Meal} from '@repo/meals';
import {Flex, Stack} from '@repo/ui/components';

import {type Order, type OrderStatus} from "#/entities";

type PartialOrder = Partial<Order>;

type OrderDialogProps = {
    tablesInfo: TablesInfo;
    meals: Meal[];
    orderStatuses: OrderStatus[];
    order?: Order;
    isVisible: boolean;
    onHide: () => void;
    onSave?: (update: PartialOrder) => void;
}

export function OrderDialog(
    {
        order,
        meals,
        orderStatuses,
        tablesInfo,
        isVisible,
        onHide,
        onSave
    }: OrderDialogProps) {
    const [tablePosition, setTablePosition] = useState<Nullable<number>>(order?.tablePosition);
    const [meal, setMeal] = useState<Nullable<Meal>>(order?.meal)
    const [status, setStatus] = useState<Nullable<OrderStatus>>(order?.status);

    const [mealSuggestions, setMealSuggestions] = useState<Meal[]>(meals);

    const [isValid, setIsValid] = useState<boolean>(true);

    const isEditMode = !!order;

    const isValidForm = isEditMode
        ? (!!tablePosition && !!meal && !!status)
        : (!!status);

    const updateFields = (order?: Order) => {
        setTablePosition(order?.tablePosition);
        setMeal(order?.meal);
        setStatus(order?.status);
    }

    useEffect(() => {
        updateFields(order);
        setIsValid(true);
    }, [order])

    const handleAccept = () => {
        if (!isValidForm) {
            setIsValid(false);
            return;
        }

        setIsValid(true);

        onHide();
        onSave?.({
            id: order?.id,
            tablePosition: tablePosition!,
            meal: meal!,
            status: status!,
        })
    }

    const handleReject = () => {
        setIsValid(true);
        updateFields(order);
        onHide();
    }

    const mealCompleteMethod = (event: AutoCompleteCompleteEvent) => {
        setMealSuggestions(
            meals.filter(
                meal => meal.title.toLowerCase().startsWith(event.query.toLowerCase())
            )
        )
    };

    return (
        <Dialog
            visible={isVisible}
            style={{width: '32rem'}}
            breakpoints={{'960px': '75vw', '641px': '90vw'}}
            header="Заказ"
            modal
            className="p-fluid"
            footer={
                <Flex spacing={2}>
                    <Button label="Отмена"
                            icon="pi pi-times"
                            outlined
                            onClick={handleReject}
                    />
                    <Button label="Сохранить"
                            icon="pi pi-check"
                            onClick={handleAccept}
                    />
                </Flex>
            }
            onHide={handleReject}
        >
            <Stack>
                {!isValid && <span style={{color: 'var(--red-500)'}}>Все поля формы обязательны*</span>}
                <label>
                    <Stack spacing={2}>
                        <span>Номер столика</span>
                        <InputNumber value={tablePosition}
                                     max={tablesInfo.maxTablePosition}
                                     min={tablesInfo.minTablePosition}
                                     onValueChange={(e) => setTablePosition(e.value)}
                                     showButtons
                                     readOnly={isEditMode}
                        />
                    </Stack>
                </label>

                <label>
                    <Stack spacing={2}>
                        <span>Блюдо</span>
                        <AutoComplete field="title"
                                      value={meal}
                                      forceSelection
                                      suggestions={mealSuggestions}
                                      completeMethod={mealCompleteMethod}
                                      onChange={(e) => setMeal(e.value)}
                                      dropdown
                        />
                    </Stack>
                </label>

                <label>
                    <Stack spacing={2}>
                        <span>Статус</span>
                        <Dropdown options={orderStatuses}
                                  value={status}
                                  onChange={(e) => setStatus(e.target.value)}
                                  optionLabel="name"
                        />
                    </Stack>
                </label>

            </Stack>
        </Dialog>
    )
}