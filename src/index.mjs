'use strict';

import {muv} from 'muvjs/muv';
import {model} from './model/model.mjs';
import {update} from './update/update.mjs';
import {view} from './view/view.mjs';
import {ignition} from './ignition/ignition.mjs';
import {subscriptions} from './subscriptions/subscriptions.mjs';
import _ from 'tachyons/css/tachyons.min.css'

muv({model, update, view, ignition, subscriptions})('root');