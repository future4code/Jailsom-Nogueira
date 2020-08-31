"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews";
const getAllSubscribers = () => __awaiter(void 0, void 0, void 0, function* () {
    const subscribers = yield axios_1.default.get(`${baseUrl}/subscribers/all`);
    return subscribers.data.map((subscriber) => {
        return {
            id: subscriber.id,
            name: subscriber.name,
            email: subscriber.email
        };
    });
});
const sendNotifications = (subscriber, message) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Enviando notificação para: ', subscriber.name);
    yield axios_1.default.post(`${baseUrl}/notifications/send`, {
        subscriberId: subscriber.id,
        message
    });
    console.log('Notificação enviada para: ', subscriber.name);
});
const getNotificationsBySubscriberId = (subscriberId) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield axios_1.default.get(`${baseUrl}/subscribers/${subscriberId}/notifications/all`);
    return res.data.map((notification) => {
        return {
            subscriberId: notification.subscriberId,
            message: notification.message
        };
    });
});
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const createNewSubscriber = (body) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                yield axios_1.default.put(`
          ${baseUrl}/subscribers`, body);
            }
            catch (error) {
                console.log(error.message);
            }
        });
        yield createNewSubscriber({
            name: "Jay",
            email: "jay@jaymail.com"
        });
        const createNew = (body) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                yield axios_1.default.put(`${baseUrl}/news`, body);
            }
            catch (error) {
                console.log(error.message);
            }
        });
        yield createNew({
            title: "O Jay assinou um jornal",
            content: "Espectadores ficaram incrédulos com a noticia de que Jay abrou a mão para assinar um jornal.",
            date: Date.now()
        });
        const getNews = () => __awaiter(void 0, void 0, void 0, function* () {
            const allNews = yield axios_1.default.get(`${baseUrl}/news/all`);
            console.log(allNews.data);
            return allNews.data;
        });
        yield getNews();
        const subscribers = yield getAllSubscribers();
        const promisesArray = [];
        for (const subscriber of subscribers) {
            promisesArray.push(sendNotifications(subscriber, 'Novidades!!!'));
        }
        const notificationPromiseArray = [];
        for (const subscriber of subscribers) {
            notificationPromiseArray.push(getNotificationsBySubscriberId(subscriber.id));
        }
        const promiseAllResult = yield Promise.all(notificationPromiseArray);
        console.log('Result: ', promiseAllResult);
    }
    catch (e) {
        console.log(e.response.data);
    }
});
main();
