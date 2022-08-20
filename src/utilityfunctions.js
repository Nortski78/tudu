function sortTasks(order, array) {

    if(order === "date") {

        array.sort(function(a, b) {
            let keyA = a.getDueDate();
            let keyB = b.getDueDate();
            
            if (keyA < keyB) return -1;
            if (keyA > keyB) return 1;
            return 0;
        });

        return array;
    }

    if(order === "priority") {

        const order = { high: 1, medium: 2, low: 3 };
        array.sort(function (a, b) {
            return order[a.getPriority()] - order[b.getPriority()];
        });

        return array;
    }

    if(order === "completedStatus"){

        array.sort(function (a, b) {
            return b.getCompletedStatus() - a.getCompletedStatus();
        });

        return array;
    }
}

export { sortTasks };