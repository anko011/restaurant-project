import {useEffect, useState} from "react";
import {Nullable} from "primereact/ts-helpers";
import {Dialog} from "primereact/dialog";
import {Button} from "primereact/button";
import {InputNumber} from "primereact/inputnumber";
import {InputText} from "primereact/inputtext";
import {Calendar} from "primereact/calendar";

import {type TablesInfo} from '@repo/tables/types'
import {Flex, Stack} from "@repo/ui/components";

import {BookingWithTable} from "../../types";


type UpdateBooking = {
    id?: number;
    guestName: string;
    positionTable: number;
    startDate: Date;
    endDate: Date;
}


type BookingDialogProps = {
    tablesInfo: TablesInfo;
    isVisible: boolean;
    onHide: () => void;
    booking?: BookingWithTable;
    onSave?: (updateBooking: UpdateBooking) => void;
}

export function BookingDialog({tablesInfo, booking, isVisible, onHide, onSave}: BookingDialogProps) {
    const [positionTable, setPositionTable] = useState<Nullable<number>>(booking?.table.position);
    const [guestName, setGuestName] = useState<Nullable<string>>();
    const [startDate, setStartDate] = useState<Nullable<Date>>(booking?.startDate);
    const [endDate, setEndDate] = useState<Nullable<Date>>(booking?.endDate);

    const [isValid, setIsValid] = useState<boolean>(true);

    const isValidForm = !!positionTable && !!guestName && guestName.length > 0 && !!startDate && !!endDate;

    const updateFields = (booking?: BookingWithTable) => {
        setPositionTable(booking?.table.position);
        setGuestName(booking?.guestName);
        setStartDate(booking?.startDate);
        setEndDate(booking?.endDate);
    }

    useEffect(() => {
        updateFields(booking);
        setIsValid(true);
    }, [booking])

    const handleAccept = () => {
        if (!isValidForm) {
            setIsValid(false);
            return;
        }

        setIsValid(true);
        onHide();
        onSave?.({
            id: booking?.id,
            guestName,
            positionTable,
            startDate,
            endDate
        })
    }

    const handleReject = () => {
        setIsValid(true);
        updateFields(booking);
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
            <Stack>
                {!isValid && <span style={{color: 'var(--red-500)'}}>Все поля формы обязательны*</span>}
                <label>
                    <Stack spacing={2}>
                        <span>Номер столика</span>
                        <InputNumber value={positionTable}
                                     max={tablesInfo.maxTablePosition}
                                     min={tablesInfo.minTablePosition}
                                     onValueChange={(e) => setPositionTable(e.value)}
                                     showButtons
                        />
                    </Stack>
                </label>

                <label>
                    <Stack spacing={2}>
                        <span>Имя гостя</span>
                        <InputText value={guestName}
                                   onChange={(e) => setGuestName(e.target.value)}
                        />
                    </Stack>
                </label>

                <label>
                    <Stack spacing={2}>
                        <span>Начальное время бронирования</span>
                        <Calendar
                            value={startDate}
                            onChange={(e) => setStartDate(e.value)}
                            showTime
                            hourFormat="24"
                        />
                    </Stack>
                </label>

                <label>
                    <Stack spacing={2}>
                        <span>Конечное время бронирования</span>
                        <Calendar
                            value={endDate}
                            onChange={(e) => setEndDate(e.value)}
                            showTime
                            hourFormat="24"
                        />
                    </Stack>
                </label>
            </Stack>
        </Dialog>
    )
}