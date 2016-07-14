var Common = window.Common || {};

/**
 * Генерация уникального ID
 * @private
 *
 * @return {string} - ID
 */
Common.generateId = function() {
    return '_' + Math.random().toString(36).substr(2, 12);
};

export default Common;
