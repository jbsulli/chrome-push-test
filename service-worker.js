self.addEventListener('install', function (event) {
    console.log('Install');
});

self.addEventListener('push', function (event) {
    console.log('Received a push message', event);
    
    var title = 'Yay a message.';
    var body = 'We have received a push message.';
    var icon = '';
    var tag = 'push-test';
    
    event.waitUnitl(
        self.registration.showNotification(title, {
            body: body,
            icon: icon,
            tag: tag
        })
    );
});
