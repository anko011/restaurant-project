import {useState} from "react";
import {type Nullable} from "primereact/ts-helpers";
import {AutoComplete, type AutoCompleteCompleteEvent} from "primereact/autocomplete";
import {Dialog} from "primereact/dialog";
import {Button} from "primereact/button";
import {InputNumber} from "primereact/inputnumber";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";

//TODO импорты
import {type Meal} from '@repo/meals/types';
import {type TablesInfo} from '@repo/tables/types';
import {Flex, Stack} from '@repo/ui/components';

import type {Cart, CartItem} from "../../types";

type CartFormProps = {
    tablesInfos: TablesInfo;
    isVisible: boolean;
    meals: Meal[];
    onHide: () => void;
    onSave?: (cart: Cart) => void;
}

export function CartForm(
    {
        isVisible,
        tablesInfos,
        meals,
        onHide,
        onSave
    }: CartFormProps) {
    const [items, setItems] = useState<CartItem[]>([]);

    const [mealsSuggestion, setMealSuggestions] = useState<Meal[]>(meals);
    const [tablePosition, setTablePosition] = useState<Nullable<number>>();
    const [meal, setMeal] = useState<Nullable<Meal>>();
    const [count, setCount] = useState<Nullable<number>>();

    const [error, setError] = useState('');

    const isFieldsFilled = !!tablePosition && !!meal && !!count;

    const reset = () => {
        setTablePosition(null);
        setItems([]);
        resetCartFields();
    }

    const resetCartFields = () => {
        setMeal(null);
        setCount(null);
        setError('');
    }

    const handleClickAdd = () => {
        if (!isFieldsFilled) {
            setError('Все поля обязательные*');
            return;
        }

        setItems(prev => [...prev, {...meal, count}])
        resetCartFields();
    }

    const handleReject = () => {
        onHide();
        reset();
    }

    const mealCompleteMethod = (event: AutoCompleteCompleteEvent) => {
        setMealSuggestions(
            meals.filter(
                meal => meal.title.toLowerCase().startsWith(event.query.toLowerCase())
            )
        )
    };

    const handleAccept = () => {
        if (tablePosition) onSave?.({tablePosition, items,})
        onHide();
        reset();
    };

    return (
        <Dialog
            visible={isVisible}
            style={{width: '32rem', height: '50rem'}}
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
                {error.length > 0 && <span>{error}</span>}

                <label>
                    <span>Столик</span>
                    <InputNumber value={tablePosition}
                                 min={tablesInfos.minTablePosition}
                                 max={tablesInfos.maxTablePosition}
                                 onChange={(e) => setTablePosition(e.value)}
                    />
                </label>

                <label>
                    <span>Блюдо</span>
                    <AutoComplete field="title"
                                  value={meal}
                                  forceSelection
                                  suggestions={mealsSuggestion}
                                  completeMethod={mealCompleteMethod}
                                  onChange={(e) => setMeal(e.value)}
                                  dropdown/>
                </label>

                <label>
                    <span>Количество</span>
                    <InputNumber value={count}
                                 onChange={(e) => setCount(e.value)}
                                 min={1}
                    />
                </label>

                <Button onClick={handleClickAdd}>Добавить</Button>

                {tablePosition && (
                    <>
                        <span>Корзина</span>
                        <DataTable value={items}
                                   size="small"
                        >
                            <Column
                                field="title"
                                header="Блюдо"
                                sortable
                            />

                            <Column
                                field="count"
                                header="Количество"
                            />
                        </DataTable>
                    </>
                )}
            </Stack>
        </Dialog>
    )
}