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
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const subscribers = yield getAllSubscribers();
        const promisesArray = [];
        for (const subscriber of subscribers) {
            promisesArray.push(sendNotifications(subscriber, 'Promise.all é o que msm?'));
        }
        yield Promise.all(promisesArray);
        console.log('Coisou');
    }
    catch (e) {
        console.log(e.response.data);
    }
});
main();
