const request = (cb) => {
    console.log('request');

    cb({
        text: 'error'
    });
    setTimeout(() => {
        console.log('response');
        const data = {
            text: 'Hello'
        };
        cb(null, data);
    }, 2000);
};
request((err, data) => {
    if (!err) {
        console.log('Hello Callback!', data);
    } else {
        console.log('Error');
    }

});