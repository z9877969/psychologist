import services from '../data/services.json';

export const servicesAPI = {
  fetchServices: async function () {
    return services;
  },
};
