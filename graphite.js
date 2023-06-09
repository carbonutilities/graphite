const Graphite = {
  set: function(key, value) {
    localStorage.setItem(key, JSON.stringify(value));

    const event = new CustomEvent('GraphiteStorageEvent', {
      detail: { key, value },
    });
    window.dispatchEvent(event);
  },

  get: function(key, callback) {
    const value = JSON.parse(localStorage.getItem(key));
    callback && callback(value);
  },

  push: function(key, ...values) {
    const array = this.get(key);
    if (Array.isArray(array)) {
      array.push(...values);
      this.set(key, array);
      return array;
    }
    return null;
  },

  pull: function(key, ...values) {
    const array = this.get(key);
    if (Array.isArray(array)) {
      const newArray = array.filter(item => !values.includes(item));
      this.set(key, newArray);
      return newArray;
    }
    return null;
  },

  has: function(key, value) {
    const array = this.get(key);
    if (Array.isArray(array)) {
      return array.includes(value);
    }
    return false;
  },

  delete: function(key) {
    const value = this.get(key);
    localStorage.removeItem(key);
    return value;
  },

  add: function(key, amount) {
    const value = this.get(key);
    if (typeof value === 'number') {
      const newValue = value + amount;
      this.set(key, newValue);
      return newValue;
    }
    return null;
  },

  sub: function(key, amount) {
    const value = this.get(key);
    if (typeof value === 'number') {
      const newValue = value - amount;
      this.set(key, newValue);
      return newValue;
    }
    return null;
  },
};

window.addEventListener('GraphiteStorageEvent', function(event) {
  const { key, value } = event.detail;
  localStorage.setItem(key, JSON.stringify(value));
});

window.Graphite = Graphite;
