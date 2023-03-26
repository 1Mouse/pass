const omit = (keys: string[], obj: Object) => (
    Object.fromEntries(
        Object.entries(obj)
            .filter(([k]) => !keys.includes(k))
    )
);

export default omit;