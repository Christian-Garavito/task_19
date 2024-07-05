var TimeLimitedCache = function () {
};

TimeLimitedCache.prototype.cached = {};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
    const hasKey = Object.keys(TimeLimitedCache.prototype.cached).includes(`${key}`)
    if (hasKey) {
        clearTimeout(TimeLimitedCache.prototype.cached[key]["timeoutId"]);
    }
    TimeLimitedCache.prototype.cached[key] = {}
    TimeLimitedCache.prototype.cached[key]["value"] = value;
    TimeLimitedCache.prototype.cached[key]["timeoutId"] = setTimeout(() => {
        delete TimeLimitedCache.prototype.cached[key];
    }, duration);
    return hasKey;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
    console.log(TimeLimitedCache.prototype.cached);
    return Object.keys(TimeLimitedCache.prototype.cached).includes(`${key}`) ? TimeLimitedCache.prototype.cached[key]["value"] : -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
    return Object.keys(TimeLimitedCache.prototype.cached).length;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */