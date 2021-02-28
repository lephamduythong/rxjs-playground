// catchError: bắt lỗi xảy ra khi đang xử lí trên obs, thay thế bằng obs mới, nếu throw lỗi trong catchError thì subscriber sẽ báo lỗi
// catchError dùng trong pipe, nếu dùng ngoài thì ghi .catch
/* const obs = Observable.of(1, 2, 3, 4, 5).map(value => {
    if (value === 3) {
        throw 'holy shit';
    };
    return value;
}).catch((error, caught) => {
    console.log(error); // holy shit
    console.log(caught); // Obs
    throw 'clgt'; // Error: clgt
});
stdSub(obs); */

// retry: ~catchError nhưng lỗi thì ko stop mà thử chạy lại, ví dụ auto reconnect

// retryWhen