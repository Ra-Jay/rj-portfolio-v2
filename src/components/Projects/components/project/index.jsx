'use client';
import React from 'react'
import styles from './style.module.scss';

export default function index({index, title, role, period, manageModal}) {

    return (
        <div onMouseEnter={(e) => {manageModal(true, index, e.clientX, e.clientY)}} onMouseLeave={(e) => {manageModal(false, index, e.clientX, e.clientY)}} className={styles.project}>
            <h2>{title}</h2>
            <p>{role}<span>{period}</span></p>
        </div>
    )
}
