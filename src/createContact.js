export default function createContact(){
    const contact = document.createElement('div');
    contact.classList.add('contact');
    const contactContent = document.createElement('div');
    const h1 = document.createElement('h1');
    h1.innerHTML = 'Be Our Guest'
    const phone = document.createElement('p');
    phone.innerHTML = '📞 704-555-5555';
    const res = document.createElement('p');
    res.innerHTML = 'For reservation inquiries contact valkyrierestaurant@gmail.com';
    const address = document.createElement('p');
    address.innerHTML = '1362 Harry Place, Charlotte NC, 28022';
    const hours = document.createElement('p');
    hours.innerHTML = '🕕 Mon-Thurs 11am-8pm, Fri-Sun: 11am-11pm';
    contactContent.appendChild(h1);
    contactContent.appendChild(phone);
    contactContent.appendChild(res);
    contactContent.appendChild(hours);
    contact.appendChild(contactContent);

    return contact


}