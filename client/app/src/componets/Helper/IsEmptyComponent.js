/* eslint-disable no-unused-vars */

// checking give props is empty or not
import React from "react";

// utils.js or similar helper file
export const isEmpty = (value) => {
    // Check if value is null or undefined
    if (value === null || value === undefined) {
        return true;
    }

    // Check if value is an array and empty
    if (Array.isArray(value) && value.length === 0) {
        return true;
    }

    // Check if value is an object and empty
    if (typeof value === 'object' && Object.keys(value).length === 0) {
        return true;
    }

    // Check if value is a string and empty
    if (typeof value === 'string' && value.trim().length === 0) {
        return true;
    }

    return false;
};
