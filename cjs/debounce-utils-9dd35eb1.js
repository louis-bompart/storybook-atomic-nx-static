'use strict';

function buildDebouncedQueue(options) {
    let actions = [];
    let intervalId = null;
    function dequeueAction() {
        const action = actions.shift();
        if (action) {
            action.execute();
        }
        else {
            clearInterval(intervalId);
            intervalId = null;
        }
    }
    function cancelActionIfQueued(id) {
        actions = actions.filter((action) => action.id !== id);
    }
    return {
        enqueue(execute, uniqueId) {
            if (uniqueId) {
                cancelActionIfQueued(uniqueId);
            }
            actions.push({ id: uniqueId, execute });
            if (intervalId === null) {
                dequeueAction();
                intervalId = setInterval(dequeueAction, options.delay);
            }
        },
        clear() {
            actions = [];
        },
        cancelActionIfQueued,
    };
}
function debounce(execute, wait) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        return new Promise((resolve) => {
            timer = setTimeout(() => resolve(execute(...args)), wait);
        });
    };
}

exports.buildDebouncedQueue = buildDebouncedQueue;
exports.debounce = debounce;

//# sourceMappingURL=debounce-utils-9dd35eb1.js.map