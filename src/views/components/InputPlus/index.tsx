import React, {useCallback, useState} from 'react';
import styles from './index.module.scss';

interface InputPlusProps {
    onAdd: (title: string) => void
}

export const InputPlus: React.FC<InputPlusProps> = ({
                                                        onAdd
                                                    }) => {
    const [inputValue, setInputValue] = useState('');
    const addTask = useCallback(() => {
        onAdd(inputValue);
        setInputValue('');
    }, [inputValue]);

    return (
        <div className={styles.inputPlus}>
            <input
                onChange={(evt) => setInputValue(evt.target.value)}
                onKeyDown={(evt) => {
                    if (evt.key === 'Enter') {
                        addTask();
                    }
                }}
                className={styles.inputPlusValue}
                value={inputValue}
                type="text"
                placeholder="Type here..."
            />
            <button
                onClick={addTask}
                aria-label="Add"
                className={styles.inputPlusButton}
            />
        </div>
    );
}
