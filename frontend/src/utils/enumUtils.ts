import { $enum } from 'ts-enum-util';
import { StringKeyOf } from 'ts-enum-util/dist/types/types';

/** Represents a single value of an enum (e.g. RED in enum Color) */
export type ValueOfEnum<T extends EnumBase<T>> = T[Extract<keyof T, keyof T>];

/** Represents an enum (e.g. Color) whose key and value must be equal */
export type EnumBase<T> = Record<StringKeyOf<T>, StringKeyOf<T>>;

export const parseEnum = <T extends EnumBase<T>>(enumType: T, value: string | undefined): ValueOfEnum<T> | undefined => {
    return $enum(enumType).getValueOrDefault(value);
};

export const parseEnumArray = <T extends EnumBase<T>>(enumType: T, value: string[]): ValueOfEnum<T>[] => {
    return value.map(val => parseEnum(enumType, val)).filter((x): x is ValueOfEnum<T> => x !== undefined);
};

export const getEnumValues = <T extends EnumBase<T>>(enumType: T): ValueOfEnum<T>[] => $enum(enumType).map(val => val);
