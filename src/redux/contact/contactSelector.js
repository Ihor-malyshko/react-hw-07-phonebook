import { createSelector } from '@reduxjs/toolkit';

const getItems = state => state.contact.items;

const isLoading = state => state.contact.loadingReducer;

const getFilter = state => state.contact.filter;

const getFilteredContacts = createSelector(
  [getFilter, getItems],
  (filter, items) => {
    const normalizeSearch = filter.toLowerCase();
    return items.filter(item =>
      item.name.toLowerCase().includes(normalizeSearch),
    );
  },
);

export default {
  getItems,
  isLoading,
  getFilter,
  getFilteredContacts,
};
