
import React, { useState } from 'react';
import documentService from 'services/documents.service';

export default function DetailsRoute() {

    const [value, setValue] = useState('');
    const [provincia, setProvincia] = useState('36');

    function uploadData() {
        const items = JSON.parse(value);
        items.forEach(item => {
            item.provincia = provincia;
            documentService.createItem(item);
        });
    }

    return (
        <main className="Admin">
            <input placeholder="provincia" type="text" value={provincia} onChange={v => setProvincia(v.target.value)} />
            <button onClick={uploadData} type="button" className="btn">Upload Data</button>
            <textarea value={value} onChange={e => setValue(e.target.value)}></textarea>
        </main>
    );
}