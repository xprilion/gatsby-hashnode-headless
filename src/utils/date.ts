export const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);

    const day = date.getDate();
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();

    return `${day} ${month}, ${year}`;
}