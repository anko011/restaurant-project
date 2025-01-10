import {useEffect, useState} from "react";
import {Dialog} from "primereact/dialog";
import {Flex, Stack} from "@repo/ui/components";
import {Button} from "primereact/button";
import {Dropdown} from "primereact/dropdown";

import type {Table, TableStatus} from "../../types";

type BookingDialogProps = {
    table: Table;
    tableStatuses: TableStatus[];
    isVisible: boolean;
    onHide: () => void;
    onSave?: (updateTable: Table) => void;
}

export function TableDialog({table, tableStatuses, isVisible, onHide, onSave}: BookingDialogProps) {

    const [tableStatus, setTableStatus] = useState<TableStatus>();
    const [isValid, setIsValid] = useState<boolean>(true);

    const isValidForm = !!tableStatus;

    const updateFields = (table?: Table) => {
        setTableStatus(table?.status);
    }

    useEffect(() => {
        updateFields(table);
        setIsValid(true);
    }, [table])

    const handleAccept = () => {
        if (!isValidForm) {
            setIsValid(false);
            return;
        }

        setIsValid(true);
        onHide();
        onSave?.({
            id: table.id,
            status: tableStatus,
            booking: table.booking,
            position: table.position,
        })
    }

    const handleReject = () => {
        setIsValid(true);
        updateFields(table);
        onHide();
    }

    return (
        <Dialog
            visible={isVisible}
            style={{width: '32rem'}}
            breakpoints={{'960px': '75vw', '641px': '90vw'}}
            header="Бронирование столика"
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
            {!isValid && <span style={{color: 'var(--red-500)'}}>Все поля формы обязательны*</span>}
            <label>
                <Stack spacing={2}>
                    <span>Номер столика</span>
                    <Dropdown options={tableStatuses}
                              value={tableStatus}
                              onChange={(e) => setTableStatus(e.target.value)}
                              optionLabel="name"
                    />
                </Stack>
            </label>

        </Dialog>
    )
}