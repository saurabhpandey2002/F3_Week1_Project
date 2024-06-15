document.addEventListener('DOMContentLoaded', () => {
    const counter = document.getElementById('counter');
    const incrementBtn = document.getElementById('increment');
    const decrementBtn = document.getElementById('decrement');
    const clearBtn = document.getElementById('clear');
    const error = document.getElementById('error');

    incrementBtn.addEventListener('click', () => {
        counter.innerHTML = parseInt(counter.innerHTML) + 1;
        if (parseInt(counter.innerHTML) > 0) {
            clearBtn.style.display = 'block';
            error.style.display = 'none';
        }
    });

    decrementBtn.addEventListener('click', () => {
        if (parseInt(counter.innerHTML) > 0) {
            counter.innerHTML = parseInt(counter.innerHTML) - 1;
            if (parseInt(counter.innerHTML) === 0) {
                clearBtn.style.display = 'none';
            }
        } else {
            error.style.display = 'block';
        }
    });

    clearBtn.addEventListener('click', () => {
        counter.innerHTML = 0;
        clearBtn.style.display = 'none';
        error.style.display = 'none';
    });
});
