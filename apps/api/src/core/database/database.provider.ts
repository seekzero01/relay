import { Inject } from '@nestjs/common';
import {db} from "@repo/database";

export const DB_PROVIDER = 'DrizzleProvider';

export const InjectDb = () => Inject(DB_PROVIDER);

export const databaseProvider = {
    provide: DB_PROVIDER,
    useValue: db,
};