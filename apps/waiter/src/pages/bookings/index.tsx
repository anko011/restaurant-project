import {useState} from "react";
import {type RouteObject} from "react-router-dom";
import {Toolbar} from "primereact/toolbar";
import {Button} from "primereact/button";
import {confirmDialog, ConfirmDialog} from "primereact/confirmdialog";

import {type BookingWithTable} from "@repo/bookings";
import {BookingDialog, BookingsDataTableSkeleton, BookingsTableData} from "@repo/bookings/ui";
import {useBookingsWithTableRepository} from "@repo/bookings/api";
import {useTablesInfoRepository} from "@repo/tables/api";
import {Flex, Paper, Stack} from "@repo/ui/components";

import {routePaths} from "~/shared/router";
import {privateRoute} from "@repo/users/model";

export function BookingsPage() {
    const {items: bookingsWithTable, isLoading: isLoadingBookingsWthTable} = useBookingsWithTableRepository();
    const {info: tablesInfo, isLoading: isLoadingTablesInfo} = useTablesInfoRepository();

    const isLoading = isLoadingTablesInfo && isLoadingBookingsWthTable;

    const [isOpenBookingDialog, setIsOpenBookingDialog] = useState(false);
    const [selectedBooking, setSelectedBooking] = useState<BookingWithTable>();

    const handleClickAddBooking = () => {
        setIsOpenBookingDialog(true);
    };

    const handleClickDeleteBooking = (booking: BookingWithTable) => {
        confirmDialog({
            message: `Вы действительно хотите удалить бронирование на имя: ${booking.guestName}?`,
            header: 'Удаление бронирования',
            icon: 'pi pi-exclamation-triangle',
            defaultFocus: 'reject',
        })
    };

    const handleClickEditBooking = (booking: BookingWithTable) => {
        setSelectedBooking(booking);
        setIsOpenBookingDialog(true);
    };

    return (
        <>
            <Stack>
                <Paper>
                    <h1>Бронирования</h1>
                </Paper>
                <Paper>
                    <Stack spacing={2}>
                        <Toolbar
                            start={
                                <Flex>
                                    <Button
                                        loading={isLoading}
                                        label="Добавить"
                                        icon="pi pi-plus"
                                        severity="success"
                                        onClick={() => handleClickAddBooking()}
                                    />
                                </Flex>
                            }
                        />

                        {isLoading
                            ? <BookingsDataTableSkeleton/>
                            : <BookingsTableData
                                bookingsWithTable={bookingsWithTable!}
                                actionRender={(booking) =>
                                    <Flex spacing={2}>
                                        <Button icon="pi pi-pencil"
                                                rounded
                                                outlined
                                                className="mr-2"
                                                onClick={() => handleClickEditBooking(booking)}
                                        />
                                        <Button
                                            icon="pi pi-trash"
                                            rounded
                                            outlined
                                            severity="danger"
                                            onClick={() => handleClickDeleteBooking(booking)}
                                        />
                                    </Flex>
                                }
                            />
                        }
                    </Stack>
                </Paper>
            </Stack>

            {tablesInfo && (
                <BookingDialog isVisible={isOpenBookingDialog}
                               onHide={() => setIsOpenBookingDialog(false)}
                               booking={selectedBooking}
                               tablesInfo={tablesInfo}
                />
            )}
            <ConfirmDialog/>
        </>
    )
}

const Page = privateRoute(BookingsPage, routePaths.signIn());

export const bookingsRoute: RouteObject = {
    path: routePaths.bookings(),
    element: <Page/>
}
