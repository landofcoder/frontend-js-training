import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import createRootReducer from '../reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import { Iterable } from 'immutable';
import { routerMiddleware } from 'connected-react-router/immutable';

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const middleWares = [];
middleWares.push(sagaMiddleware);

if (process.env.NODE_ENV === `development`) {
    const { createLogger } = require(`redux-logger`);
    const logger = createLogger({
        stateTransformer: state => {
            const newState = {};
            const stateObj = state.toObject();

            for (const i of Object.keys(stateObj)) {
                if (Iterable.isIterable(stateObj[i])) {
                    newState[i] = stateObj[i].toJS();
                } else {
                    newState[i] = stateObj[i];
                }
            }

            return newState;
        }
    });
    middleWares.push(logger);
}

export default function configureStore(preloadedState) {
    const store = createStore(
        createRootReducer(history), // root reducer with router state
        preloadedState,
        compose(
            applyMiddleware(
                routerMiddleware(history), // for dispatching history actions
                ...middleWares
            )
        )
    );
    // then run the saga
    sagaMiddleware.run(rootSaga);
    return store;
}
