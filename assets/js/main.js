import { notifications } from '../data/notifications.js';

document.addEventListener('DOMContentLoaded', () => {
	createListItems(notifications);
	toggleClearBtn();
});

const createEl = elementName => document.createElement(elementName);
const createTxt = elementTxt => document.createTextNode(elementTxt);

const createListItems = listNotifications => {
	let ul = document.querySelector('.card__body__list');

	listNotifications.forEach(item => {
		let li = createEl('li'),
			img = createImg(item),
			div = createDiv(item);

		li.setAttribute('class', 'card__body__list_item');
		li.appendChild(img);
		li.appendChild(div);
		ul.appendChild(li);
	});
};

const createImg = notification => {
	let img = createEl('img');
	img.setAttribute('class', 'card__body__list_item_img');
	img.setAttribute('src', `https://i.pravatar.cc/100?img=${notification.imgId}`);
	img.setAttribute('alt', `${notification.firstName} ${notification.lastName}`);
	return img;
}

const createPara = notification => {
	let p = createEl('p'),
		textPara = createTxt(` ${notification.description}`),
		strong = createStrong(notification);

	p.setAttribute('class', 'card__body__list_item_para');
	p.appendChild(strong);
	p.appendChild(textPara);
	return p;
}

const createStrong = notification => {
	let strong = createEl('strong'),
		textStrong = createTxt(`${notification.firstName} ${notification.lastName}`);

	strong.appendChild(textStrong);
	return strong;
}

const createDiv = notification => {
	let div = createEl('div'),
		p = createPara(notification),
		time = createTime(notification);

	div.setAttribute('class', 'card__body__list_item_div');
	div.appendChild(p);
	div.appendChild(time);
	return div;
}

const createTime = notification => {
	let time = createEl('time'),
		textTime = createTxt(`${notification.time}`);

	time.appendChild(textTime);
	return time;
}


const toggleClearBtn = () => {
	const cogBtn = document.querySelector('#cogBtn'),
		clearBtn = document.querySelector('.clear__bubble');

	cogBtn.addEventListener('click', () => clearBtn.classList.toggle('hidden'));
}