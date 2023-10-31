import { useEffect, useState } from 'react';

/**
 * @description
 * useState와 localStorage를 사용해 영구적으로 로컬 스토리지에 보관할 수 있는 훅입니다.
 * 로컬 스토리지에 저장된 값과 setter를 반환합니다.
 * @param {string} key
 * @param {T} initialValue - 초기값을 지정합니다. 제네릭 타입으로 지정된 값만이 허용됩니다.
 * @return {[T, React.Dispatch<React.SetStateAction<T>>]}
 */

const usePersistedState = <T extends string | number | object | null | undefined>(
  key: string,
  initialValue: T,
): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const serializedItem = localStorage.getItem(key);
  const [state, setState] = useState<T>(
    serializedItem ? (typeof serializedItem === 'object' ? JSON.parse(serializedItem) : serializedItem) : initialValue,
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, setState];
};

export default usePersistedState;
