import { useCallback, Ref } from 'react';

export type RefCallback<T> = {
  (element: T): void;
};
export type Refs<T> = (Ref<T> | RefCallback<T>)[];

/**
 * React hook for combining mutiple ref
 * @see https://github.com/facebook/react/issues/13029#issuecomment-497641073
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useCombinedRefs = <T extends any>(...refs: Refs<T>): Ref<T> =>
  useCallback(
    (element: T) =>
      refs.forEach(ref => {
        if (!ref) {
          return;
        }

        // Ref can have two types - a function or an object. We treat each case.
        if (typeof ref === 'function') {
          return ref(element); // eslint-disable-line consistent-return
        }

        // As per https://github.com/facebook/react/issues/13029
        // it should be fine to set current this way.
        (ref as any).current = element; // eslint-disable-line no-param-reassign
      }),
    refs // eslint-disable-line react-hooks/exhaustive-deps
  );

export default useCombinedRefs;
