const checkPermission = () => {
    try {
        if (('serviceworker' in navigator)) {
            console.log('Service workers are supported');
        }
    } catch (error) {
        console.log(error);
    }
}

const registerSW = async () => {
    const reqistration = await navigator.serviceWorker.register('sw.js');
    return reqistration;
}

checkPermission();
registerSW();