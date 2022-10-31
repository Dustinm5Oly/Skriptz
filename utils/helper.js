helpers = {
    addSuffix: (day) => {
        dueDay = parseInt(day);
        switch (day) {
            case 1||21:
                return dueDay+"st"
            case 2||22:
                return dueDay+"nd"
            default:
                return dueDay+"th";
        }
    }
}

module.exports = helpers;