/**
 * created by Nine on 2017/8/21.
 */

'use strict';

/**
 *
 * @type {module.Form}
 */
module.exports = class Form {

    /**
     *
     * @param value
     * @param type
     * @param errmsg
     * @returns {boolean|*}
     */
    validate(value, type, errmsg) {
        let defaultType = ['email', 'phone', 'url'];
        let needle = defaultType.indexOf(type);
        if (needle > -1) {
            let regular = '';
            switch (type) {
                case 'email':
                    regular = /\w+@\w+\.\w+/;
                    break;
                case 'phone':
                    regular = /1[35789]\d{9}/;
                    break;
                case 'url' :
                    regular = /http[s]:\/\/\w+/;
                    break;
            }
            if (!regular.test(value)) {
                throw new Error(errmsg);
            }
        } else {
            //针对是正则
            if (typeof type === 'object' && !type.test(value)) {
                throw new Error(errmsg);
            //针对是直接判断
            } else if (typeof type === 'boolean' && !type) {
                throw new Error(errmsg);
            }
        }
        return this;
    }
};

