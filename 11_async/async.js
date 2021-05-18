const first = () => console.log('First')
const second = () => console.log('Second')
const thrid = () => console.log('Thrid')

first()
second()
thrid()


first()
setTimeout(second, 0)
thrid()