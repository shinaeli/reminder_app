export const filterDates = time => {
    f(filtered === "all") {
        return item;
    } else {
        let numberOfDays;

        switch(filtered) {
            case "2day":
                numberOfDays = 2;
                break;
            case "1week":
                numberOfDays = 7;
                break;
            case "30days":
                numberOfDays = 30;
                break;
            default:
                numberOfDays = 0;
                break;
        }
        
        const result = item.filter(reminder => {
            const todaysDate = new Date().toISOString().slice(0, 10);
            const todaysTime = new Date(todaysDate).getTime();
            const dueTime = new Date(reminder.dueDate).getTime();
            return dueTime < (todaysTime + (numberOfDays * 86400000));
        });
        return result;
    }
}