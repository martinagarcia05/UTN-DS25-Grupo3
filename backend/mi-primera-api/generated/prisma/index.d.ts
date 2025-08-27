
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Evento
 * 
 */
export type Evento = $Result.DefaultSelection<Prisma.$EventoPayload>
/**
 * Model Entrada
 * 
 */
export type Entrada = $Result.DefaultSelection<Prisma.$EntradaPayload>
/**
 * Model Socio
 * 
 */
export type Socio = $Result.DefaultSelection<Prisma.$SocioPayload>
/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const FormaDePago: {
  EFECTIVO: 'EFECTIVO',
  CBU: 'CBU'
};

export type FormaDePago = (typeof FormaDePago)[keyof typeof FormaDePago]


export const Sexo: {
  M: 'M',
  F: 'F'
};

export type Sexo = (typeof Sexo)[keyof typeof Sexo]

}

export type FormaDePago = $Enums.FormaDePago

export const FormaDePago: typeof $Enums.FormaDePago

export type Sexo = $Enums.Sexo

export const Sexo: typeof $Enums.Sexo

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Eventos
 * const eventos = await prisma.evento.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Eventos
   * const eventos = await prisma.evento.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.evento`: Exposes CRUD operations for the **Evento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Eventos
    * const eventos = await prisma.evento.findMany()
    * ```
    */
  get evento(): Prisma.EventoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.entrada`: Exposes CRUD operations for the **Entrada** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Entradas
    * const entradas = await prisma.entrada.findMany()
    * ```
    */
  get entrada(): Prisma.EntradaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.socio`: Exposes CRUD operations for the **Socio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Socios
    * const socios = await prisma.socio.findMany()
    * ```
    */
  get socio(): Prisma.SocioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Evento: 'Evento',
    Entrada: 'Entrada',
    Socio: 'Socio',
    Usuario: 'Usuario'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "evento" | "entrada" | "socio" | "usuario"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Evento: {
        payload: Prisma.$EventoPayload<ExtArgs>
        fields: Prisma.EventoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          findFirst: {
            args: Prisma.EventoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          findMany: {
            args: Prisma.EventoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>[]
          }
          create: {
            args: Prisma.EventoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          createMany: {
            args: Prisma.EventoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>[]
          }
          delete: {
            args: Prisma.EventoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          update: {
            args: Prisma.EventoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          deleteMany: {
            args: Prisma.EventoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>[]
          }
          upsert: {
            args: Prisma.EventoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          aggregate: {
            args: Prisma.EventoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvento>
          }
          groupBy: {
            args: Prisma.EventoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventoGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventoCountArgs<ExtArgs>
            result: $Utils.Optional<EventoCountAggregateOutputType> | number
          }
        }
      }
      Entrada: {
        payload: Prisma.$EntradaPayload<ExtArgs>
        fields: Prisma.EntradaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EntradaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntradaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EntradaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntradaPayload>
          }
          findFirst: {
            args: Prisma.EntradaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntradaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EntradaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntradaPayload>
          }
          findMany: {
            args: Prisma.EntradaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntradaPayload>[]
          }
          create: {
            args: Prisma.EntradaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntradaPayload>
          }
          createMany: {
            args: Prisma.EntradaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EntradaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntradaPayload>[]
          }
          delete: {
            args: Prisma.EntradaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntradaPayload>
          }
          update: {
            args: Prisma.EntradaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntradaPayload>
          }
          deleteMany: {
            args: Prisma.EntradaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EntradaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EntradaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntradaPayload>[]
          }
          upsert: {
            args: Prisma.EntradaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntradaPayload>
          }
          aggregate: {
            args: Prisma.EntradaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEntrada>
          }
          groupBy: {
            args: Prisma.EntradaGroupByArgs<ExtArgs>
            result: $Utils.Optional<EntradaGroupByOutputType>[]
          }
          count: {
            args: Prisma.EntradaCountArgs<ExtArgs>
            result: $Utils.Optional<EntradaCountAggregateOutputType> | number
          }
        }
      }
      Socio: {
        payload: Prisma.$SocioPayload<ExtArgs>
        fields: Prisma.SocioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SocioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SocioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocioPayload>
          }
          findFirst: {
            args: Prisma.SocioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SocioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocioPayload>
          }
          findMany: {
            args: Prisma.SocioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocioPayload>[]
          }
          create: {
            args: Prisma.SocioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocioPayload>
          }
          createMany: {
            args: Prisma.SocioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SocioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocioPayload>[]
          }
          delete: {
            args: Prisma.SocioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocioPayload>
          }
          update: {
            args: Prisma.SocioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocioPayload>
          }
          deleteMany: {
            args: Prisma.SocioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SocioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SocioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocioPayload>[]
          }
          upsert: {
            args: Prisma.SocioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocioPayload>
          }
          aggregate: {
            args: Prisma.SocioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSocio>
          }
          groupBy: {
            args: Prisma.SocioGroupByArgs<ExtArgs>
            result: $Utils.Optional<SocioGroupByOutputType>[]
          }
          count: {
            args: Prisma.SocioCountArgs<ExtArgs>
            result: $Utils.Optional<SocioCountAggregateOutputType> | number
          }
        }
      }
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    evento?: EventoOmit
    entrada?: EntradaOmit
    socio?: SocioOmit
    usuario?: UsuarioOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type EventoCountOutputType
   */

  export type EventoCountOutputType = {
    entradas: number
  }

  export type EventoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entradas?: boolean | EventoCountOutputTypeCountEntradasArgs
  }

  // Custom InputTypes
  /**
   * EventoCountOutputType without action
   */
  export type EventoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventoCountOutputType
     */
    select?: EventoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventoCountOutputType without action
   */
  export type EventoCountOutputTypeCountEntradasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EntradaWhereInput
  }


  /**
   * Count Type SocioCountOutputType
   */

  export type SocioCountOutputType = {
    entradas: number
  }

  export type SocioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entradas?: boolean | SocioCountOutputTypeCountEntradasArgs
  }

  // Custom InputTypes
  /**
   * SocioCountOutputType without action
   */
  export type SocioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocioCountOutputType
     */
    select?: SocioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SocioCountOutputType without action
   */
  export type SocioCountOutputTypeCountEntradasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EntradaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Evento
   */

  export type AggregateEvento = {
    _count: EventoCountAggregateOutputType | null
    _avg: EventoAvgAggregateOutputType | null
    _sum: EventoSumAggregateOutputType | null
    _min: EventoMinAggregateOutputType | null
    _max: EventoMaxAggregateOutputType | null
  }

  export type EventoAvgAggregateOutputType = {
    id: number | null
    capacidad: number | null
    precioEntrada: number | null
  }

  export type EventoSumAggregateOutputType = {
    id: number | null
    capacidad: number | null
    precioEntrada: number | null
  }

  export type EventoMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    fecha: Date | null
    horaInicio: string | null
    horaFin: string | null
    capacidad: number | null
    precioEntrada: number | null
    ubicacion: string | null
    descripcion: string | null
    createdAt: Date | null
  }

  export type EventoMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    fecha: Date | null
    horaInicio: string | null
    horaFin: string | null
    capacidad: number | null
    precioEntrada: number | null
    ubicacion: string | null
    descripcion: string | null
    createdAt: Date | null
  }

  export type EventoCountAggregateOutputType = {
    id: number
    nombre: number
    fecha: number
    horaInicio: number
    horaFin: number
    capacidad: number
    precioEntrada: number
    ubicacion: number
    descripcion: number
    createdAt: number
    _all: number
  }


  export type EventoAvgAggregateInputType = {
    id?: true
    capacidad?: true
    precioEntrada?: true
  }

  export type EventoSumAggregateInputType = {
    id?: true
    capacidad?: true
    precioEntrada?: true
  }

  export type EventoMinAggregateInputType = {
    id?: true
    nombre?: true
    fecha?: true
    horaInicio?: true
    horaFin?: true
    capacidad?: true
    precioEntrada?: true
    ubicacion?: true
    descripcion?: true
    createdAt?: true
  }

  export type EventoMaxAggregateInputType = {
    id?: true
    nombre?: true
    fecha?: true
    horaInicio?: true
    horaFin?: true
    capacidad?: true
    precioEntrada?: true
    ubicacion?: true
    descripcion?: true
    createdAt?: true
  }

  export type EventoCountAggregateInputType = {
    id?: true
    nombre?: true
    fecha?: true
    horaInicio?: true
    horaFin?: true
    capacidad?: true
    precioEntrada?: true
    ubicacion?: true
    descripcion?: true
    createdAt?: true
    _all?: true
  }

  export type EventoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Evento to aggregate.
     */
    where?: EventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventos to fetch.
     */
    orderBy?: EventoOrderByWithRelationInput | EventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Eventos
    **/
    _count?: true | EventoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventoMaxAggregateInputType
  }

  export type GetEventoAggregateType<T extends EventoAggregateArgs> = {
        [P in keyof T & keyof AggregateEvento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvento[P]>
      : GetScalarType<T[P], AggregateEvento[P]>
  }




  export type EventoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventoWhereInput
    orderBy?: EventoOrderByWithAggregationInput | EventoOrderByWithAggregationInput[]
    by: EventoScalarFieldEnum[] | EventoScalarFieldEnum
    having?: EventoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventoCountAggregateInputType | true
    _avg?: EventoAvgAggregateInputType
    _sum?: EventoSumAggregateInputType
    _min?: EventoMinAggregateInputType
    _max?: EventoMaxAggregateInputType
  }

  export type EventoGroupByOutputType = {
    id: number
    nombre: string
    fecha: Date
    horaInicio: string
    horaFin: string
    capacidad: number
    precioEntrada: number
    ubicacion: string
    descripcion: string
    createdAt: Date
    _count: EventoCountAggregateOutputType | null
    _avg: EventoAvgAggregateOutputType | null
    _sum: EventoSumAggregateOutputType | null
    _min: EventoMinAggregateOutputType | null
    _max: EventoMaxAggregateOutputType | null
  }

  type GetEventoGroupByPayload<T extends EventoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventoGroupByOutputType[P]>
            : GetScalarType<T[P], EventoGroupByOutputType[P]>
        }
      >
    >


  export type EventoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    fecha?: boolean
    horaInicio?: boolean
    horaFin?: boolean
    capacidad?: boolean
    precioEntrada?: boolean
    ubicacion?: boolean
    descripcion?: boolean
    createdAt?: boolean
    entradas?: boolean | Evento$entradasArgs<ExtArgs>
    _count?: boolean | EventoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evento"]>

  export type EventoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    fecha?: boolean
    horaInicio?: boolean
    horaFin?: boolean
    capacidad?: boolean
    precioEntrada?: boolean
    ubicacion?: boolean
    descripcion?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["evento"]>

  export type EventoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    fecha?: boolean
    horaInicio?: boolean
    horaFin?: boolean
    capacidad?: boolean
    precioEntrada?: boolean
    ubicacion?: boolean
    descripcion?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["evento"]>

  export type EventoSelectScalar = {
    id?: boolean
    nombre?: boolean
    fecha?: boolean
    horaInicio?: boolean
    horaFin?: boolean
    capacidad?: boolean
    precioEntrada?: boolean
    ubicacion?: boolean
    descripcion?: boolean
    createdAt?: boolean
  }

  export type EventoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "fecha" | "horaInicio" | "horaFin" | "capacidad" | "precioEntrada" | "ubicacion" | "descripcion" | "createdAt", ExtArgs["result"]["evento"]>
  export type EventoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entradas?: boolean | Evento$entradasArgs<ExtArgs>
    _count?: boolean | EventoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EventoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EventoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Evento"
    objects: {
      entradas: Prisma.$EntradaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      fecha: Date
      horaInicio: string
      horaFin: string
      capacidad: number
      precioEntrada: number
      ubicacion: string
      descripcion: string
      createdAt: Date
    }, ExtArgs["result"]["evento"]>
    composites: {}
  }

  type EventoGetPayload<S extends boolean | null | undefined | EventoDefaultArgs> = $Result.GetResult<Prisma.$EventoPayload, S>

  type EventoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventoCountAggregateInputType | true
    }

  export interface EventoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Evento'], meta: { name: 'Evento' } }
    /**
     * Find zero or one Evento that matches the filter.
     * @param {EventoFindUniqueArgs} args - Arguments to find a Evento
     * @example
     * // Get one Evento
     * const evento = await prisma.evento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventoFindUniqueArgs>(args: SelectSubset<T, EventoFindUniqueArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Evento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventoFindUniqueOrThrowArgs} args - Arguments to find a Evento
     * @example
     * // Get one Evento
     * const evento = await prisma.evento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventoFindUniqueOrThrowArgs>(args: SelectSubset<T, EventoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Evento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoFindFirstArgs} args - Arguments to find a Evento
     * @example
     * // Get one Evento
     * const evento = await prisma.evento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventoFindFirstArgs>(args?: SelectSubset<T, EventoFindFirstArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Evento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoFindFirstOrThrowArgs} args - Arguments to find a Evento
     * @example
     * // Get one Evento
     * const evento = await prisma.evento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventoFindFirstOrThrowArgs>(args?: SelectSubset<T, EventoFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Eventos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Eventos
     * const eventos = await prisma.evento.findMany()
     * 
     * // Get first 10 Eventos
     * const eventos = await prisma.evento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventoWithIdOnly = await prisma.evento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventoFindManyArgs>(args?: SelectSubset<T, EventoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Evento.
     * @param {EventoCreateArgs} args - Arguments to create a Evento.
     * @example
     * // Create one Evento
     * const Evento = await prisma.evento.create({
     *   data: {
     *     // ... data to create a Evento
     *   }
     * })
     * 
     */
    create<T extends EventoCreateArgs>(args: SelectSubset<T, EventoCreateArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Eventos.
     * @param {EventoCreateManyArgs} args - Arguments to create many Eventos.
     * @example
     * // Create many Eventos
     * const evento = await prisma.evento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventoCreateManyArgs>(args?: SelectSubset<T, EventoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Eventos and returns the data saved in the database.
     * @param {EventoCreateManyAndReturnArgs} args - Arguments to create many Eventos.
     * @example
     * // Create many Eventos
     * const evento = await prisma.evento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Eventos and only return the `id`
     * const eventoWithIdOnly = await prisma.evento.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventoCreateManyAndReturnArgs>(args?: SelectSubset<T, EventoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Evento.
     * @param {EventoDeleteArgs} args - Arguments to delete one Evento.
     * @example
     * // Delete one Evento
     * const Evento = await prisma.evento.delete({
     *   where: {
     *     // ... filter to delete one Evento
     *   }
     * })
     * 
     */
    delete<T extends EventoDeleteArgs>(args: SelectSubset<T, EventoDeleteArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Evento.
     * @param {EventoUpdateArgs} args - Arguments to update one Evento.
     * @example
     * // Update one Evento
     * const evento = await prisma.evento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventoUpdateArgs>(args: SelectSubset<T, EventoUpdateArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Eventos.
     * @param {EventoDeleteManyArgs} args - Arguments to filter Eventos to delete.
     * @example
     * // Delete a few Eventos
     * const { count } = await prisma.evento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventoDeleteManyArgs>(args?: SelectSubset<T, EventoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Eventos
     * const evento = await prisma.evento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventoUpdateManyArgs>(args: SelectSubset<T, EventoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Eventos and returns the data updated in the database.
     * @param {EventoUpdateManyAndReturnArgs} args - Arguments to update many Eventos.
     * @example
     * // Update many Eventos
     * const evento = await prisma.evento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Eventos and only return the `id`
     * const eventoWithIdOnly = await prisma.evento.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventoUpdateManyAndReturnArgs>(args: SelectSubset<T, EventoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Evento.
     * @param {EventoUpsertArgs} args - Arguments to update or create a Evento.
     * @example
     * // Update or create a Evento
     * const evento = await prisma.evento.upsert({
     *   create: {
     *     // ... data to create a Evento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Evento we want to update
     *   }
     * })
     */
    upsert<T extends EventoUpsertArgs>(args: SelectSubset<T, EventoUpsertArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoCountArgs} args - Arguments to filter Eventos to count.
     * @example
     * // Count the number of Eventos
     * const count = await prisma.evento.count({
     *   where: {
     *     // ... the filter for the Eventos we want to count
     *   }
     * })
    **/
    count<T extends EventoCountArgs>(
      args?: Subset<T, EventoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Evento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventoAggregateArgs>(args: Subset<T, EventoAggregateArgs>): Prisma.PrismaPromise<GetEventoAggregateType<T>>

    /**
     * Group by Evento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventoGroupByArgs['orderBy'] }
        : { orderBy?: EventoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Evento model
   */
  readonly fields: EventoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Evento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    entradas<T extends Evento$entradasArgs<ExtArgs> = {}>(args?: Subset<T, Evento$entradasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntradaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Evento model
   */
  interface EventoFieldRefs {
    readonly id: FieldRef<"Evento", 'Int'>
    readonly nombre: FieldRef<"Evento", 'String'>
    readonly fecha: FieldRef<"Evento", 'DateTime'>
    readonly horaInicio: FieldRef<"Evento", 'String'>
    readonly horaFin: FieldRef<"Evento", 'String'>
    readonly capacidad: FieldRef<"Evento", 'Int'>
    readonly precioEntrada: FieldRef<"Evento", 'Float'>
    readonly ubicacion: FieldRef<"Evento", 'String'>
    readonly descripcion: FieldRef<"Evento", 'String'>
    readonly createdAt: FieldRef<"Evento", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Evento findUnique
   */
  export type EventoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter, which Evento to fetch.
     */
    where: EventoWhereUniqueInput
  }

  /**
   * Evento findUniqueOrThrow
   */
  export type EventoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter, which Evento to fetch.
     */
    where: EventoWhereUniqueInput
  }

  /**
   * Evento findFirst
   */
  export type EventoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter, which Evento to fetch.
     */
    where?: EventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventos to fetch.
     */
    orderBy?: EventoOrderByWithRelationInput | EventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Eventos.
     */
    cursor?: EventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Eventos.
     */
    distinct?: EventoScalarFieldEnum | EventoScalarFieldEnum[]
  }

  /**
   * Evento findFirstOrThrow
   */
  export type EventoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter, which Evento to fetch.
     */
    where?: EventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventos to fetch.
     */
    orderBy?: EventoOrderByWithRelationInput | EventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Eventos.
     */
    cursor?: EventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Eventos.
     */
    distinct?: EventoScalarFieldEnum | EventoScalarFieldEnum[]
  }

  /**
   * Evento findMany
   */
  export type EventoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter, which Eventos to fetch.
     */
    where?: EventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventos to fetch.
     */
    orderBy?: EventoOrderByWithRelationInput | EventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Eventos.
     */
    cursor?: EventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventos.
     */
    skip?: number
    distinct?: EventoScalarFieldEnum | EventoScalarFieldEnum[]
  }

  /**
   * Evento create
   */
  export type EventoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * The data needed to create a Evento.
     */
    data: XOR<EventoCreateInput, EventoUncheckedCreateInput>
  }

  /**
   * Evento createMany
   */
  export type EventoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Eventos.
     */
    data: EventoCreateManyInput | EventoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Evento createManyAndReturn
   */
  export type EventoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * The data used to create many Eventos.
     */
    data: EventoCreateManyInput | EventoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Evento update
   */
  export type EventoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * The data needed to update a Evento.
     */
    data: XOR<EventoUpdateInput, EventoUncheckedUpdateInput>
    /**
     * Choose, which Evento to update.
     */
    where: EventoWhereUniqueInput
  }

  /**
   * Evento updateMany
   */
  export type EventoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Eventos.
     */
    data: XOR<EventoUpdateManyMutationInput, EventoUncheckedUpdateManyInput>
    /**
     * Filter which Eventos to update
     */
    where?: EventoWhereInput
    /**
     * Limit how many Eventos to update.
     */
    limit?: number
  }

  /**
   * Evento updateManyAndReturn
   */
  export type EventoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * The data used to update Eventos.
     */
    data: XOR<EventoUpdateManyMutationInput, EventoUncheckedUpdateManyInput>
    /**
     * Filter which Eventos to update
     */
    where?: EventoWhereInput
    /**
     * Limit how many Eventos to update.
     */
    limit?: number
  }

  /**
   * Evento upsert
   */
  export type EventoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * The filter to search for the Evento to update in case it exists.
     */
    where: EventoWhereUniqueInput
    /**
     * In case the Evento found by the `where` argument doesn't exist, create a new Evento with this data.
     */
    create: XOR<EventoCreateInput, EventoUncheckedCreateInput>
    /**
     * In case the Evento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventoUpdateInput, EventoUncheckedUpdateInput>
  }

  /**
   * Evento delete
   */
  export type EventoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter which Evento to delete.
     */
    where: EventoWhereUniqueInput
  }

  /**
   * Evento deleteMany
   */
  export type EventoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Eventos to delete
     */
    where?: EventoWhereInput
    /**
     * Limit how many Eventos to delete.
     */
    limit?: number
  }

  /**
   * Evento.entradas
   */
  export type Evento$entradasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrada
     */
    select?: EntradaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrada
     */
    omit?: EntradaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntradaInclude<ExtArgs> | null
    where?: EntradaWhereInput
    orderBy?: EntradaOrderByWithRelationInput | EntradaOrderByWithRelationInput[]
    cursor?: EntradaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EntradaScalarFieldEnum | EntradaScalarFieldEnum[]
  }

  /**
   * Evento without action
   */
  export type EventoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
  }


  /**
   * Model Entrada
   */

  export type AggregateEntrada = {
    _count: EntradaCountAggregateOutputType | null
    _avg: EntradaAvgAggregateOutputType | null
    _sum: EntradaSumAggregateOutputType | null
    _min: EntradaMinAggregateOutputType | null
    _max: EntradaMaxAggregateOutputType | null
  }

  export type EntradaAvgAggregateOutputType = {
    id: number | null
    eventoId: number | null
    cantidad: number | null
    precioUnitario: number | null
    total: number | null
    socioId: number | null
  }

  export type EntradaSumAggregateOutputType = {
    id: number | null
    eventoId: number | null
    cantidad: number | null
    precioUnitario: number | null
    total: number | null
    socioId: number | null
  }

  export type EntradaMinAggregateOutputType = {
    id: number | null
    eventoId: number | null
    cantidad: number | null
    precioUnitario: number | null
    total: number | null
    fechaCompra: Date | null
    socioId: number | null
    createdAt: Date | null
    formaDePago: $Enums.FormaDePago | null
    comprobanteUrl: string | null
  }

  export type EntradaMaxAggregateOutputType = {
    id: number | null
    eventoId: number | null
    cantidad: number | null
    precioUnitario: number | null
    total: number | null
    fechaCompra: Date | null
    socioId: number | null
    createdAt: Date | null
    formaDePago: $Enums.FormaDePago | null
    comprobanteUrl: string | null
  }

  export type EntradaCountAggregateOutputType = {
    id: number
    eventoId: number
    cantidad: number
    precioUnitario: number
    total: number
    fechaCompra: number
    socioId: number
    createdAt: number
    formaDePago: number
    comprobanteUrl: number
    _all: number
  }


  export type EntradaAvgAggregateInputType = {
    id?: true
    eventoId?: true
    cantidad?: true
    precioUnitario?: true
    total?: true
    socioId?: true
  }

  export type EntradaSumAggregateInputType = {
    id?: true
    eventoId?: true
    cantidad?: true
    precioUnitario?: true
    total?: true
    socioId?: true
  }

  export type EntradaMinAggregateInputType = {
    id?: true
    eventoId?: true
    cantidad?: true
    precioUnitario?: true
    total?: true
    fechaCompra?: true
    socioId?: true
    createdAt?: true
    formaDePago?: true
    comprobanteUrl?: true
  }

  export type EntradaMaxAggregateInputType = {
    id?: true
    eventoId?: true
    cantidad?: true
    precioUnitario?: true
    total?: true
    fechaCompra?: true
    socioId?: true
    createdAt?: true
    formaDePago?: true
    comprobanteUrl?: true
  }

  export type EntradaCountAggregateInputType = {
    id?: true
    eventoId?: true
    cantidad?: true
    precioUnitario?: true
    total?: true
    fechaCompra?: true
    socioId?: true
    createdAt?: true
    formaDePago?: true
    comprobanteUrl?: true
    _all?: true
  }

  export type EntradaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Entrada to aggregate.
     */
    where?: EntradaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entradas to fetch.
     */
    orderBy?: EntradaOrderByWithRelationInput | EntradaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EntradaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entradas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entradas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Entradas
    **/
    _count?: true | EntradaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EntradaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EntradaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EntradaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EntradaMaxAggregateInputType
  }

  export type GetEntradaAggregateType<T extends EntradaAggregateArgs> = {
        [P in keyof T & keyof AggregateEntrada]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEntrada[P]>
      : GetScalarType<T[P], AggregateEntrada[P]>
  }




  export type EntradaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EntradaWhereInput
    orderBy?: EntradaOrderByWithAggregationInput | EntradaOrderByWithAggregationInput[]
    by: EntradaScalarFieldEnum[] | EntradaScalarFieldEnum
    having?: EntradaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EntradaCountAggregateInputType | true
    _avg?: EntradaAvgAggregateInputType
    _sum?: EntradaSumAggregateInputType
    _min?: EntradaMinAggregateInputType
    _max?: EntradaMaxAggregateInputType
  }

  export type EntradaGroupByOutputType = {
    id: number
    eventoId: number
    cantidad: number
    precioUnitario: number
    total: number
    fechaCompra: Date
    socioId: number | null
    createdAt: Date
    formaDePago: $Enums.FormaDePago
    comprobanteUrl: string | null
    _count: EntradaCountAggregateOutputType | null
    _avg: EntradaAvgAggregateOutputType | null
    _sum: EntradaSumAggregateOutputType | null
    _min: EntradaMinAggregateOutputType | null
    _max: EntradaMaxAggregateOutputType | null
  }

  type GetEntradaGroupByPayload<T extends EntradaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EntradaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EntradaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EntradaGroupByOutputType[P]>
            : GetScalarType<T[P], EntradaGroupByOutputType[P]>
        }
      >
    >


  export type EntradaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventoId?: boolean
    cantidad?: boolean
    precioUnitario?: boolean
    total?: boolean
    fechaCompra?: boolean
    socioId?: boolean
    createdAt?: boolean
    formaDePago?: boolean
    comprobanteUrl?: boolean
    evento?: boolean | EventoDefaultArgs<ExtArgs>
    socio?: boolean | Entrada$socioArgs<ExtArgs>
  }, ExtArgs["result"]["entrada"]>

  export type EntradaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventoId?: boolean
    cantidad?: boolean
    precioUnitario?: boolean
    total?: boolean
    fechaCompra?: boolean
    socioId?: boolean
    createdAt?: boolean
    formaDePago?: boolean
    comprobanteUrl?: boolean
    evento?: boolean | EventoDefaultArgs<ExtArgs>
    socio?: boolean | Entrada$socioArgs<ExtArgs>
  }, ExtArgs["result"]["entrada"]>

  export type EntradaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventoId?: boolean
    cantidad?: boolean
    precioUnitario?: boolean
    total?: boolean
    fechaCompra?: boolean
    socioId?: boolean
    createdAt?: boolean
    formaDePago?: boolean
    comprobanteUrl?: boolean
    evento?: boolean | EventoDefaultArgs<ExtArgs>
    socio?: boolean | Entrada$socioArgs<ExtArgs>
  }, ExtArgs["result"]["entrada"]>

  export type EntradaSelectScalar = {
    id?: boolean
    eventoId?: boolean
    cantidad?: boolean
    precioUnitario?: boolean
    total?: boolean
    fechaCompra?: boolean
    socioId?: boolean
    createdAt?: boolean
    formaDePago?: boolean
    comprobanteUrl?: boolean
  }

  export type EntradaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventoId" | "cantidad" | "precioUnitario" | "total" | "fechaCompra" | "socioId" | "createdAt" | "formaDePago" | "comprobanteUrl", ExtArgs["result"]["entrada"]>
  export type EntradaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evento?: boolean | EventoDefaultArgs<ExtArgs>
    socio?: boolean | Entrada$socioArgs<ExtArgs>
  }
  export type EntradaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evento?: boolean | EventoDefaultArgs<ExtArgs>
    socio?: boolean | Entrada$socioArgs<ExtArgs>
  }
  export type EntradaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evento?: boolean | EventoDefaultArgs<ExtArgs>
    socio?: boolean | Entrada$socioArgs<ExtArgs>
  }

  export type $EntradaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Entrada"
    objects: {
      evento: Prisma.$EventoPayload<ExtArgs>
      socio: Prisma.$SocioPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      eventoId: number
      cantidad: number
      precioUnitario: number
      total: number
      fechaCompra: Date
      socioId: number | null
      createdAt: Date
      formaDePago: $Enums.FormaDePago
      comprobanteUrl: string | null
    }, ExtArgs["result"]["entrada"]>
    composites: {}
  }

  type EntradaGetPayload<S extends boolean | null | undefined | EntradaDefaultArgs> = $Result.GetResult<Prisma.$EntradaPayload, S>

  type EntradaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EntradaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EntradaCountAggregateInputType | true
    }

  export interface EntradaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Entrada'], meta: { name: 'Entrada' } }
    /**
     * Find zero or one Entrada that matches the filter.
     * @param {EntradaFindUniqueArgs} args - Arguments to find a Entrada
     * @example
     * // Get one Entrada
     * const entrada = await prisma.entrada.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EntradaFindUniqueArgs>(args: SelectSubset<T, EntradaFindUniqueArgs<ExtArgs>>): Prisma__EntradaClient<$Result.GetResult<Prisma.$EntradaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Entrada that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EntradaFindUniqueOrThrowArgs} args - Arguments to find a Entrada
     * @example
     * // Get one Entrada
     * const entrada = await prisma.entrada.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EntradaFindUniqueOrThrowArgs>(args: SelectSubset<T, EntradaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EntradaClient<$Result.GetResult<Prisma.$EntradaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Entrada that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntradaFindFirstArgs} args - Arguments to find a Entrada
     * @example
     * // Get one Entrada
     * const entrada = await prisma.entrada.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EntradaFindFirstArgs>(args?: SelectSubset<T, EntradaFindFirstArgs<ExtArgs>>): Prisma__EntradaClient<$Result.GetResult<Prisma.$EntradaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Entrada that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntradaFindFirstOrThrowArgs} args - Arguments to find a Entrada
     * @example
     * // Get one Entrada
     * const entrada = await prisma.entrada.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EntradaFindFirstOrThrowArgs>(args?: SelectSubset<T, EntradaFindFirstOrThrowArgs<ExtArgs>>): Prisma__EntradaClient<$Result.GetResult<Prisma.$EntradaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Entradas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntradaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Entradas
     * const entradas = await prisma.entrada.findMany()
     * 
     * // Get first 10 Entradas
     * const entradas = await prisma.entrada.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const entradaWithIdOnly = await prisma.entrada.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EntradaFindManyArgs>(args?: SelectSubset<T, EntradaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntradaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Entrada.
     * @param {EntradaCreateArgs} args - Arguments to create a Entrada.
     * @example
     * // Create one Entrada
     * const Entrada = await prisma.entrada.create({
     *   data: {
     *     // ... data to create a Entrada
     *   }
     * })
     * 
     */
    create<T extends EntradaCreateArgs>(args: SelectSubset<T, EntradaCreateArgs<ExtArgs>>): Prisma__EntradaClient<$Result.GetResult<Prisma.$EntradaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Entradas.
     * @param {EntradaCreateManyArgs} args - Arguments to create many Entradas.
     * @example
     * // Create many Entradas
     * const entrada = await prisma.entrada.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EntradaCreateManyArgs>(args?: SelectSubset<T, EntradaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Entradas and returns the data saved in the database.
     * @param {EntradaCreateManyAndReturnArgs} args - Arguments to create many Entradas.
     * @example
     * // Create many Entradas
     * const entrada = await prisma.entrada.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Entradas and only return the `id`
     * const entradaWithIdOnly = await prisma.entrada.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EntradaCreateManyAndReturnArgs>(args?: SelectSubset<T, EntradaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntradaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Entrada.
     * @param {EntradaDeleteArgs} args - Arguments to delete one Entrada.
     * @example
     * // Delete one Entrada
     * const Entrada = await prisma.entrada.delete({
     *   where: {
     *     // ... filter to delete one Entrada
     *   }
     * })
     * 
     */
    delete<T extends EntradaDeleteArgs>(args: SelectSubset<T, EntradaDeleteArgs<ExtArgs>>): Prisma__EntradaClient<$Result.GetResult<Prisma.$EntradaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Entrada.
     * @param {EntradaUpdateArgs} args - Arguments to update one Entrada.
     * @example
     * // Update one Entrada
     * const entrada = await prisma.entrada.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EntradaUpdateArgs>(args: SelectSubset<T, EntradaUpdateArgs<ExtArgs>>): Prisma__EntradaClient<$Result.GetResult<Prisma.$EntradaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Entradas.
     * @param {EntradaDeleteManyArgs} args - Arguments to filter Entradas to delete.
     * @example
     * // Delete a few Entradas
     * const { count } = await prisma.entrada.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EntradaDeleteManyArgs>(args?: SelectSubset<T, EntradaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Entradas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntradaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Entradas
     * const entrada = await prisma.entrada.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EntradaUpdateManyArgs>(args: SelectSubset<T, EntradaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Entradas and returns the data updated in the database.
     * @param {EntradaUpdateManyAndReturnArgs} args - Arguments to update many Entradas.
     * @example
     * // Update many Entradas
     * const entrada = await prisma.entrada.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Entradas and only return the `id`
     * const entradaWithIdOnly = await prisma.entrada.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EntradaUpdateManyAndReturnArgs>(args: SelectSubset<T, EntradaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntradaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Entrada.
     * @param {EntradaUpsertArgs} args - Arguments to update or create a Entrada.
     * @example
     * // Update or create a Entrada
     * const entrada = await prisma.entrada.upsert({
     *   create: {
     *     // ... data to create a Entrada
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Entrada we want to update
     *   }
     * })
     */
    upsert<T extends EntradaUpsertArgs>(args: SelectSubset<T, EntradaUpsertArgs<ExtArgs>>): Prisma__EntradaClient<$Result.GetResult<Prisma.$EntradaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Entradas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntradaCountArgs} args - Arguments to filter Entradas to count.
     * @example
     * // Count the number of Entradas
     * const count = await prisma.entrada.count({
     *   where: {
     *     // ... the filter for the Entradas we want to count
     *   }
     * })
    **/
    count<T extends EntradaCountArgs>(
      args?: Subset<T, EntradaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EntradaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Entrada.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntradaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EntradaAggregateArgs>(args: Subset<T, EntradaAggregateArgs>): Prisma.PrismaPromise<GetEntradaAggregateType<T>>

    /**
     * Group by Entrada.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntradaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EntradaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EntradaGroupByArgs['orderBy'] }
        : { orderBy?: EntradaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EntradaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEntradaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Entrada model
   */
  readonly fields: EntradaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Entrada.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EntradaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    evento<T extends EventoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventoDefaultArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    socio<T extends Entrada$socioArgs<ExtArgs> = {}>(args?: Subset<T, Entrada$socioArgs<ExtArgs>>): Prisma__SocioClient<$Result.GetResult<Prisma.$SocioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Entrada model
   */
  interface EntradaFieldRefs {
    readonly id: FieldRef<"Entrada", 'Int'>
    readonly eventoId: FieldRef<"Entrada", 'Int'>
    readonly cantidad: FieldRef<"Entrada", 'Int'>
    readonly precioUnitario: FieldRef<"Entrada", 'Float'>
    readonly total: FieldRef<"Entrada", 'Float'>
    readonly fechaCompra: FieldRef<"Entrada", 'DateTime'>
    readonly socioId: FieldRef<"Entrada", 'Int'>
    readonly createdAt: FieldRef<"Entrada", 'DateTime'>
    readonly formaDePago: FieldRef<"Entrada", 'FormaDePago'>
    readonly comprobanteUrl: FieldRef<"Entrada", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Entrada findUnique
   */
  export type EntradaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrada
     */
    select?: EntradaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrada
     */
    omit?: EntradaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntradaInclude<ExtArgs> | null
    /**
     * Filter, which Entrada to fetch.
     */
    where: EntradaWhereUniqueInput
  }

  /**
   * Entrada findUniqueOrThrow
   */
  export type EntradaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrada
     */
    select?: EntradaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrada
     */
    omit?: EntradaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntradaInclude<ExtArgs> | null
    /**
     * Filter, which Entrada to fetch.
     */
    where: EntradaWhereUniqueInput
  }

  /**
   * Entrada findFirst
   */
  export type EntradaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrada
     */
    select?: EntradaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrada
     */
    omit?: EntradaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntradaInclude<ExtArgs> | null
    /**
     * Filter, which Entrada to fetch.
     */
    where?: EntradaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entradas to fetch.
     */
    orderBy?: EntradaOrderByWithRelationInput | EntradaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Entradas.
     */
    cursor?: EntradaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entradas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entradas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Entradas.
     */
    distinct?: EntradaScalarFieldEnum | EntradaScalarFieldEnum[]
  }

  /**
   * Entrada findFirstOrThrow
   */
  export type EntradaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrada
     */
    select?: EntradaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrada
     */
    omit?: EntradaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntradaInclude<ExtArgs> | null
    /**
     * Filter, which Entrada to fetch.
     */
    where?: EntradaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entradas to fetch.
     */
    orderBy?: EntradaOrderByWithRelationInput | EntradaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Entradas.
     */
    cursor?: EntradaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entradas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entradas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Entradas.
     */
    distinct?: EntradaScalarFieldEnum | EntradaScalarFieldEnum[]
  }

  /**
   * Entrada findMany
   */
  export type EntradaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrada
     */
    select?: EntradaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrada
     */
    omit?: EntradaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntradaInclude<ExtArgs> | null
    /**
     * Filter, which Entradas to fetch.
     */
    where?: EntradaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entradas to fetch.
     */
    orderBy?: EntradaOrderByWithRelationInput | EntradaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Entradas.
     */
    cursor?: EntradaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entradas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entradas.
     */
    skip?: number
    distinct?: EntradaScalarFieldEnum | EntradaScalarFieldEnum[]
  }

  /**
   * Entrada create
   */
  export type EntradaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrada
     */
    select?: EntradaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrada
     */
    omit?: EntradaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntradaInclude<ExtArgs> | null
    /**
     * The data needed to create a Entrada.
     */
    data: XOR<EntradaCreateInput, EntradaUncheckedCreateInput>
  }

  /**
   * Entrada createMany
   */
  export type EntradaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Entradas.
     */
    data: EntradaCreateManyInput | EntradaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Entrada createManyAndReturn
   */
  export type EntradaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrada
     */
    select?: EntradaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Entrada
     */
    omit?: EntradaOmit<ExtArgs> | null
    /**
     * The data used to create many Entradas.
     */
    data: EntradaCreateManyInput | EntradaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntradaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Entrada update
   */
  export type EntradaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrada
     */
    select?: EntradaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrada
     */
    omit?: EntradaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntradaInclude<ExtArgs> | null
    /**
     * The data needed to update a Entrada.
     */
    data: XOR<EntradaUpdateInput, EntradaUncheckedUpdateInput>
    /**
     * Choose, which Entrada to update.
     */
    where: EntradaWhereUniqueInput
  }

  /**
   * Entrada updateMany
   */
  export type EntradaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Entradas.
     */
    data: XOR<EntradaUpdateManyMutationInput, EntradaUncheckedUpdateManyInput>
    /**
     * Filter which Entradas to update
     */
    where?: EntradaWhereInput
    /**
     * Limit how many Entradas to update.
     */
    limit?: number
  }

  /**
   * Entrada updateManyAndReturn
   */
  export type EntradaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrada
     */
    select?: EntradaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Entrada
     */
    omit?: EntradaOmit<ExtArgs> | null
    /**
     * The data used to update Entradas.
     */
    data: XOR<EntradaUpdateManyMutationInput, EntradaUncheckedUpdateManyInput>
    /**
     * Filter which Entradas to update
     */
    where?: EntradaWhereInput
    /**
     * Limit how many Entradas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntradaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Entrada upsert
   */
  export type EntradaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrada
     */
    select?: EntradaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrada
     */
    omit?: EntradaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntradaInclude<ExtArgs> | null
    /**
     * The filter to search for the Entrada to update in case it exists.
     */
    where: EntradaWhereUniqueInput
    /**
     * In case the Entrada found by the `where` argument doesn't exist, create a new Entrada with this data.
     */
    create: XOR<EntradaCreateInput, EntradaUncheckedCreateInput>
    /**
     * In case the Entrada was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EntradaUpdateInput, EntradaUncheckedUpdateInput>
  }

  /**
   * Entrada delete
   */
  export type EntradaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrada
     */
    select?: EntradaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrada
     */
    omit?: EntradaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntradaInclude<ExtArgs> | null
    /**
     * Filter which Entrada to delete.
     */
    where: EntradaWhereUniqueInput
  }

  /**
   * Entrada deleteMany
   */
  export type EntradaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Entradas to delete
     */
    where?: EntradaWhereInput
    /**
     * Limit how many Entradas to delete.
     */
    limit?: number
  }

  /**
   * Entrada.socio
   */
  export type Entrada$socioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Socio
     */
    select?: SocioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Socio
     */
    omit?: SocioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocioInclude<ExtArgs> | null
    where?: SocioWhereInput
  }

  /**
   * Entrada without action
   */
  export type EntradaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrada
     */
    select?: EntradaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrada
     */
    omit?: EntradaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntradaInclude<ExtArgs> | null
  }


  /**
   * Model Socio
   */

  export type AggregateSocio = {
    _count: SocioCountAggregateOutputType | null
    _avg: SocioAvgAggregateOutputType | null
    _sum: SocioSumAggregateOutputType | null
    _min: SocioMinAggregateOutputType | null
    _max: SocioMaxAggregateOutputType | null
  }

  export type SocioAvgAggregateOutputType = {
    id: number | null
    dni: number | null
    usuarioId: number | null
  }

  export type SocioSumAggregateOutputType = {
    id: number | null
    dni: number | null
    usuarioId: number | null
  }

  export type SocioMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    apellido: string | null
    email: string | null
    fechaNacimiento: Date | null
    pais: string | null
    sexo: $Enums.Sexo | null
    fotoCarnet: string | null
    dni: number | null
    usuarioId: number | null
  }

  export type SocioMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    apellido: string | null
    email: string | null
    fechaNacimiento: Date | null
    pais: string | null
    sexo: $Enums.Sexo | null
    fotoCarnet: string | null
    dni: number | null
    usuarioId: number | null
  }

  export type SocioCountAggregateOutputType = {
    id: number
    nombre: number
    apellido: number
    email: number
    fechaNacimiento: number
    pais: number
    sexo: number
    fotoCarnet: number
    dni: number
    usuarioId: number
    _all: number
  }


  export type SocioAvgAggregateInputType = {
    id?: true
    dni?: true
    usuarioId?: true
  }

  export type SocioSumAggregateInputType = {
    id?: true
    dni?: true
    usuarioId?: true
  }

  export type SocioMinAggregateInputType = {
    id?: true
    nombre?: true
    apellido?: true
    email?: true
    fechaNacimiento?: true
    pais?: true
    sexo?: true
    fotoCarnet?: true
    dni?: true
    usuarioId?: true
  }

  export type SocioMaxAggregateInputType = {
    id?: true
    nombre?: true
    apellido?: true
    email?: true
    fechaNacimiento?: true
    pais?: true
    sexo?: true
    fotoCarnet?: true
    dni?: true
    usuarioId?: true
  }

  export type SocioCountAggregateInputType = {
    id?: true
    nombre?: true
    apellido?: true
    email?: true
    fechaNacimiento?: true
    pais?: true
    sexo?: true
    fotoCarnet?: true
    dni?: true
    usuarioId?: true
    _all?: true
  }

  export type SocioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Socio to aggregate.
     */
    where?: SocioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Socios to fetch.
     */
    orderBy?: SocioOrderByWithRelationInput | SocioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SocioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Socios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Socios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Socios
    **/
    _count?: true | SocioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SocioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SocioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SocioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SocioMaxAggregateInputType
  }

  export type GetSocioAggregateType<T extends SocioAggregateArgs> = {
        [P in keyof T & keyof AggregateSocio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSocio[P]>
      : GetScalarType<T[P], AggregateSocio[P]>
  }




  export type SocioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SocioWhereInput
    orderBy?: SocioOrderByWithAggregationInput | SocioOrderByWithAggregationInput[]
    by: SocioScalarFieldEnum[] | SocioScalarFieldEnum
    having?: SocioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SocioCountAggregateInputType | true
    _avg?: SocioAvgAggregateInputType
    _sum?: SocioSumAggregateInputType
    _min?: SocioMinAggregateInputType
    _max?: SocioMaxAggregateInputType
  }

  export type SocioGroupByOutputType = {
    id: number
    nombre: string
    apellido: string
    email: string
    fechaNacimiento: Date
    pais: string
    sexo: $Enums.Sexo
    fotoCarnet: string | null
    dni: number
    usuarioId: number
    _count: SocioCountAggregateOutputType | null
    _avg: SocioAvgAggregateOutputType | null
    _sum: SocioSumAggregateOutputType | null
    _min: SocioMinAggregateOutputType | null
    _max: SocioMaxAggregateOutputType | null
  }

  type GetSocioGroupByPayload<T extends SocioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SocioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SocioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SocioGroupByOutputType[P]>
            : GetScalarType<T[P], SocioGroupByOutputType[P]>
        }
      >
    >


  export type SocioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    apellido?: boolean
    email?: boolean
    fechaNacimiento?: boolean
    pais?: boolean
    sexo?: boolean
    fotoCarnet?: boolean
    dni?: boolean
    usuarioId?: boolean
    entradas?: boolean | Socio$entradasArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    _count?: boolean | SocioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["socio"]>

  export type SocioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    apellido?: boolean
    email?: boolean
    fechaNacimiento?: boolean
    pais?: boolean
    sexo?: boolean
    fotoCarnet?: boolean
    dni?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["socio"]>

  export type SocioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    apellido?: boolean
    email?: boolean
    fechaNacimiento?: boolean
    pais?: boolean
    sexo?: boolean
    fotoCarnet?: boolean
    dni?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["socio"]>

  export type SocioSelectScalar = {
    id?: boolean
    nombre?: boolean
    apellido?: boolean
    email?: boolean
    fechaNacimiento?: boolean
    pais?: boolean
    sexo?: boolean
    fotoCarnet?: boolean
    dni?: boolean
    usuarioId?: boolean
  }

  export type SocioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "apellido" | "email" | "fechaNacimiento" | "pais" | "sexo" | "fotoCarnet" | "dni" | "usuarioId", ExtArgs["result"]["socio"]>
  export type SocioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entradas?: boolean | Socio$entradasArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    _count?: boolean | SocioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SocioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type SocioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $SocioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Socio"
    objects: {
      entradas: Prisma.$EntradaPayload<ExtArgs>[]
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      apellido: string
      email: string
      fechaNacimiento: Date
      pais: string
      sexo: $Enums.Sexo
      fotoCarnet: string | null
      dni: number
      usuarioId: number
    }, ExtArgs["result"]["socio"]>
    composites: {}
  }

  type SocioGetPayload<S extends boolean | null | undefined | SocioDefaultArgs> = $Result.GetResult<Prisma.$SocioPayload, S>

  type SocioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SocioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SocioCountAggregateInputType | true
    }

  export interface SocioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Socio'], meta: { name: 'Socio' } }
    /**
     * Find zero or one Socio that matches the filter.
     * @param {SocioFindUniqueArgs} args - Arguments to find a Socio
     * @example
     * // Get one Socio
     * const socio = await prisma.socio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SocioFindUniqueArgs>(args: SelectSubset<T, SocioFindUniqueArgs<ExtArgs>>): Prisma__SocioClient<$Result.GetResult<Prisma.$SocioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Socio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SocioFindUniqueOrThrowArgs} args - Arguments to find a Socio
     * @example
     * // Get one Socio
     * const socio = await prisma.socio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SocioFindUniqueOrThrowArgs>(args: SelectSubset<T, SocioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SocioClient<$Result.GetResult<Prisma.$SocioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Socio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocioFindFirstArgs} args - Arguments to find a Socio
     * @example
     * // Get one Socio
     * const socio = await prisma.socio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SocioFindFirstArgs>(args?: SelectSubset<T, SocioFindFirstArgs<ExtArgs>>): Prisma__SocioClient<$Result.GetResult<Prisma.$SocioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Socio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocioFindFirstOrThrowArgs} args - Arguments to find a Socio
     * @example
     * // Get one Socio
     * const socio = await prisma.socio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SocioFindFirstOrThrowArgs>(args?: SelectSubset<T, SocioFindFirstOrThrowArgs<ExtArgs>>): Prisma__SocioClient<$Result.GetResult<Prisma.$SocioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Socios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Socios
     * const socios = await prisma.socio.findMany()
     * 
     * // Get first 10 Socios
     * const socios = await prisma.socio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const socioWithIdOnly = await prisma.socio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SocioFindManyArgs>(args?: SelectSubset<T, SocioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Socio.
     * @param {SocioCreateArgs} args - Arguments to create a Socio.
     * @example
     * // Create one Socio
     * const Socio = await prisma.socio.create({
     *   data: {
     *     // ... data to create a Socio
     *   }
     * })
     * 
     */
    create<T extends SocioCreateArgs>(args: SelectSubset<T, SocioCreateArgs<ExtArgs>>): Prisma__SocioClient<$Result.GetResult<Prisma.$SocioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Socios.
     * @param {SocioCreateManyArgs} args - Arguments to create many Socios.
     * @example
     * // Create many Socios
     * const socio = await prisma.socio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SocioCreateManyArgs>(args?: SelectSubset<T, SocioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Socios and returns the data saved in the database.
     * @param {SocioCreateManyAndReturnArgs} args - Arguments to create many Socios.
     * @example
     * // Create many Socios
     * const socio = await prisma.socio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Socios and only return the `id`
     * const socioWithIdOnly = await prisma.socio.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SocioCreateManyAndReturnArgs>(args?: SelectSubset<T, SocioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Socio.
     * @param {SocioDeleteArgs} args - Arguments to delete one Socio.
     * @example
     * // Delete one Socio
     * const Socio = await prisma.socio.delete({
     *   where: {
     *     // ... filter to delete one Socio
     *   }
     * })
     * 
     */
    delete<T extends SocioDeleteArgs>(args: SelectSubset<T, SocioDeleteArgs<ExtArgs>>): Prisma__SocioClient<$Result.GetResult<Prisma.$SocioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Socio.
     * @param {SocioUpdateArgs} args - Arguments to update one Socio.
     * @example
     * // Update one Socio
     * const socio = await prisma.socio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SocioUpdateArgs>(args: SelectSubset<T, SocioUpdateArgs<ExtArgs>>): Prisma__SocioClient<$Result.GetResult<Prisma.$SocioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Socios.
     * @param {SocioDeleteManyArgs} args - Arguments to filter Socios to delete.
     * @example
     * // Delete a few Socios
     * const { count } = await prisma.socio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SocioDeleteManyArgs>(args?: SelectSubset<T, SocioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Socios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Socios
     * const socio = await prisma.socio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SocioUpdateManyArgs>(args: SelectSubset<T, SocioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Socios and returns the data updated in the database.
     * @param {SocioUpdateManyAndReturnArgs} args - Arguments to update many Socios.
     * @example
     * // Update many Socios
     * const socio = await prisma.socio.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Socios and only return the `id`
     * const socioWithIdOnly = await prisma.socio.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SocioUpdateManyAndReturnArgs>(args: SelectSubset<T, SocioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Socio.
     * @param {SocioUpsertArgs} args - Arguments to update or create a Socio.
     * @example
     * // Update or create a Socio
     * const socio = await prisma.socio.upsert({
     *   create: {
     *     // ... data to create a Socio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Socio we want to update
     *   }
     * })
     */
    upsert<T extends SocioUpsertArgs>(args: SelectSubset<T, SocioUpsertArgs<ExtArgs>>): Prisma__SocioClient<$Result.GetResult<Prisma.$SocioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Socios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocioCountArgs} args - Arguments to filter Socios to count.
     * @example
     * // Count the number of Socios
     * const count = await prisma.socio.count({
     *   where: {
     *     // ... the filter for the Socios we want to count
     *   }
     * })
    **/
    count<T extends SocioCountArgs>(
      args?: Subset<T, SocioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SocioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Socio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SocioAggregateArgs>(args: Subset<T, SocioAggregateArgs>): Prisma.PrismaPromise<GetSocioAggregateType<T>>

    /**
     * Group by Socio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SocioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SocioGroupByArgs['orderBy'] }
        : { orderBy?: SocioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SocioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSocioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Socio model
   */
  readonly fields: SocioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Socio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SocioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    entradas<T extends Socio$entradasArgs<ExtArgs> = {}>(args?: Subset<T, Socio$entradasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntradaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Socio model
   */
  interface SocioFieldRefs {
    readonly id: FieldRef<"Socio", 'Int'>
    readonly nombre: FieldRef<"Socio", 'String'>
    readonly apellido: FieldRef<"Socio", 'String'>
    readonly email: FieldRef<"Socio", 'String'>
    readonly fechaNacimiento: FieldRef<"Socio", 'DateTime'>
    readonly pais: FieldRef<"Socio", 'String'>
    readonly sexo: FieldRef<"Socio", 'Sexo'>
    readonly fotoCarnet: FieldRef<"Socio", 'String'>
    readonly dni: FieldRef<"Socio", 'Int'>
    readonly usuarioId: FieldRef<"Socio", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Socio findUnique
   */
  export type SocioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Socio
     */
    select?: SocioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Socio
     */
    omit?: SocioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocioInclude<ExtArgs> | null
    /**
     * Filter, which Socio to fetch.
     */
    where: SocioWhereUniqueInput
  }

  /**
   * Socio findUniqueOrThrow
   */
  export type SocioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Socio
     */
    select?: SocioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Socio
     */
    omit?: SocioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocioInclude<ExtArgs> | null
    /**
     * Filter, which Socio to fetch.
     */
    where: SocioWhereUniqueInput
  }

  /**
   * Socio findFirst
   */
  export type SocioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Socio
     */
    select?: SocioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Socio
     */
    omit?: SocioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocioInclude<ExtArgs> | null
    /**
     * Filter, which Socio to fetch.
     */
    where?: SocioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Socios to fetch.
     */
    orderBy?: SocioOrderByWithRelationInput | SocioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Socios.
     */
    cursor?: SocioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Socios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Socios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Socios.
     */
    distinct?: SocioScalarFieldEnum | SocioScalarFieldEnum[]
  }

  /**
   * Socio findFirstOrThrow
   */
  export type SocioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Socio
     */
    select?: SocioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Socio
     */
    omit?: SocioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocioInclude<ExtArgs> | null
    /**
     * Filter, which Socio to fetch.
     */
    where?: SocioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Socios to fetch.
     */
    orderBy?: SocioOrderByWithRelationInput | SocioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Socios.
     */
    cursor?: SocioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Socios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Socios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Socios.
     */
    distinct?: SocioScalarFieldEnum | SocioScalarFieldEnum[]
  }

  /**
   * Socio findMany
   */
  export type SocioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Socio
     */
    select?: SocioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Socio
     */
    omit?: SocioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocioInclude<ExtArgs> | null
    /**
     * Filter, which Socios to fetch.
     */
    where?: SocioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Socios to fetch.
     */
    orderBy?: SocioOrderByWithRelationInput | SocioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Socios.
     */
    cursor?: SocioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Socios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Socios.
     */
    skip?: number
    distinct?: SocioScalarFieldEnum | SocioScalarFieldEnum[]
  }

  /**
   * Socio create
   */
  export type SocioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Socio
     */
    select?: SocioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Socio
     */
    omit?: SocioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocioInclude<ExtArgs> | null
    /**
     * The data needed to create a Socio.
     */
    data: XOR<SocioCreateInput, SocioUncheckedCreateInput>
  }

  /**
   * Socio createMany
   */
  export type SocioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Socios.
     */
    data: SocioCreateManyInput | SocioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Socio createManyAndReturn
   */
  export type SocioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Socio
     */
    select?: SocioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Socio
     */
    omit?: SocioOmit<ExtArgs> | null
    /**
     * The data used to create many Socios.
     */
    data: SocioCreateManyInput | SocioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Socio update
   */
  export type SocioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Socio
     */
    select?: SocioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Socio
     */
    omit?: SocioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocioInclude<ExtArgs> | null
    /**
     * The data needed to update a Socio.
     */
    data: XOR<SocioUpdateInput, SocioUncheckedUpdateInput>
    /**
     * Choose, which Socio to update.
     */
    where: SocioWhereUniqueInput
  }

  /**
   * Socio updateMany
   */
  export type SocioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Socios.
     */
    data: XOR<SocioUpdateManyMutationInput, SocioUncheckedUpdateManyInput>
    /**
     * Filter which Socios to update
     */
    where?: SocioWhereInput
    /**
     * Limit how many Socios to update.
     */
    limit?: number
  }

  /**
   * Socio updateManyAndReturn
   */
  export type SocioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Socio
     */
    select?: SocioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Socio
     */
    omit?: SocioOmit<ExtArgs> | null
    /**
     * The data used to update Socios.
     */
    data: XOR<SocioUpdateManyMutationInput, SocioUncheckedUpdateManyInput>
    /**
     * Filter which Socios to update
     */
    where?: SocioWhereInput
    /**
     * Limit how many Socios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Socio upsert
   */
  export type SocioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Socio
     */
    select?: SocioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Socio
     */
    omit?: SocioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocioInclude<ExtArgs> | null
    /**
     * The filter to search for the Socio to update in case it exists.
     */
    where: SocioWhereUniqueInput
    /**
     * In case the Socio found by the `where` argument doesn't exist, create a new Socio with this data.
     */
    create: XOR<SocioCreateInput, SocioUncheckedCreateInput>
    /**
     * In case the Socio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SocioUpdateInput, SocioUncheckedUpdateInput>
  }

  /**
   * Socio delete
   */
  export type SocioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Socio
     */
    select?: SocioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Socio
     */
    omit?: SocioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocioInclude<ExtArgs> | null
    /**
     * Filter which Socio to delete.
     */
    where: SocioWhereUniqueInput
  }

  /**
   * Socio deleteMany
   */
  export type SocioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Socios to delete
     */
    where?: SocioWhereInput
    /**
     * Limit how many Socios to delete.
     */
    limit?: number
  }

  /**
   * Socio.entradas
   */
  export type Socio$entradasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrada
     */
    select?: EntradaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrada
     */
    omit?: EntradaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntradaInclude<ExtArgs> | null
    where?: EntradaWhereInput
    orderBy?: EntradaOrderByWithRelationInput | EntradaOrderByWithRelationInput[]
    cursor?: EntradaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EntradaScalarFieldEnum | EntradaScalarFieldEnum[]
  }

  /**
   * Socio without action
   */
  export type SocioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Socio
     */
    select?: SocioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Socio
     */
    omit?: SocioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocioInclude<ExtArgs> | null
  }


  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    rol: string | null
    creadoEn: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    rol: string | null
    creadoEn: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    email: number
    password: number
    rol: number
    creadoEn: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    rol?: true
    creadoEn?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    rol?: true
    creadoEn?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    rol?: true
    creadoEn?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    email: string
    password: string
    rol: string
    creadoEn: Date
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    rol?: boolean
    creadoEn?: boolean
    socio?: boolean | Usuario$socioArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    rol?: boolean
    creadoEn?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    rol?: boolean
    creadoEn?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    rol?: boolean
    creadoEn?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "rol" | "creadoEn", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    socio?: boolean | Usuario$socioArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      socio: Prisma.$SocioPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      rol: string
      creadoEn: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    socio<T extends Usuario$socioArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$socioArgs<ExtArgs>>): Prisma__SocioClient<$Result.GetResult<Prisma.$SocioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly password: FieldRef<"Usuario", 'String'>
    readonly rol: FieldRef<"Usuario", 'String'>
    readonly creadoEn: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.socio
   */
  export type Usuario$socioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Socio
     */
    select?: SocioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Socio
     */
    omit?: SocioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocioInclude<ExtArgs> | null
    where?: SocioWhereInput
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const EventoScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    fecha: 'fecha',
    horaInicio: 'horaInicio',
    horaFin: 'horaFin',
    capacidad: 'capacidad',
    precioEntrada: 'precioEntrada',
    ubicacion: 'ubicacion',
    descripcion: 'descripcion',
    createdAt: 'createdAt'
  };

  export type EventoScalarFieldEnum = (typeof EventoScalarFieldEnum)[keyof typeof EventoScalarFieldEnum]


  export const EntradaScalarFieldEnum: {
    id: 'id',
    eventoId: 'eventoId',
    cantidad: 'cantidad',
    precioUnitario: 'precioUnitario',
    total: 'total',
    fechaCompra: 'fechaCompra',
    socioId: 'socioId',
    createdAt: 'createdAt',
    formaDePago: 'formaDePago',
    comprobanteUrl: 'comprobanteUrl'
  };

  export type EntradaScalarFieldEnum = (typeof EntradaScalarFieldEnum)[keyof typeof EntradaScalarFieldEnum]


  export const SocioScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    apellido: 'apellido',
    email: 'email',
    fechaNacimiento: 'fechaNacimiento',
    pais: 'pais',
    sexo: 'sexo',
    fotoCarnet: 'fotoCarnet',
    dni: 'dni',
    usuarioId: 'usuarioId'
  };

  export type SocioScalarFieldEnum = (typeof SocioScalarFieldEnum)[keyof typeof SocioScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    rol: 'rol',
    creadoEn: 'creadoEn'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'FormaDePago'
   */
  export type EnumFormaDePagoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FormaDePago'>
    


  /**
   * Reference to a field of type 'FormaDePago[]'
   */
  export type ListEnumFormaDePagoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FormaDePago[]'>
    


  /**
   * Reference to a field of type 'Sexo'
   */
  export type EnumSexoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Sexo'>
    


  /**
   * Reference to a field of type 'Sexo[]'
   */
  export type ListEnumSexoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Sexo[]'>
    
  /**
   * Deep Input Types
   */


  export type EventoWhereInput = {
    AND?: EventoWhereInput | EventoWhereInput[]
    OR?: EventoWhereInput[]
    NOT?: EventoWhereInput | EventoWhereInput[]
    id?: IntFilter<"Evento"> | number
    nombre?: StringFilter<"Evento"> | string
    fecha?: DateTimeFilter<"Evento"> | Date | string
    horaInicio?: StringFilter<"Evento"> | string
    horaFin?: StringFilter<"Evento"> | string
    capacidad?: IntFilter<"Evento"> | number
    precioEntrada?: FloatFilter<"Evento"> | number
    ubicacion?: StringFilter<"Evento"> | string
    descripcion?: StringFilter<"Evento"> | string
    createdAt?: DateTimeFilter<"Evento"> | Date | string
    entradas?: EntradaListRelationFilter
  }

  export type EventoOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    fecha?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrder
    capacidad?: SortOrder
    precioEntrada?: SortOrder
    ubicacion?: SortOrder
    descripcion?: SortOrder
    createdAt?: SortOrder
    entradas?: EntradaOrderByRelationAggregateInput
  }

  export type EventoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EventoWhereInput | EventoWhereInput[]
    OR?: EventoWhereInput[]
    NOT?: EventoWhereInput | EventoWhereInput[]
    nombre?: StringFilter<"Evento"> | string
    fecha?: DateTimeFilter<"Evento"> | Date | string
    horaInicio?: StringFilter<"Evento"> | string
    horaFin?: StringFilter<"Evento"> | string
    capacidad?: IntFilter<"Evento"> | number
    precioEntrada?: FloatFilter<"Evento"> | number
    ubicacion?: StringFilter<"Evento"> | string
    descripcion?: StringFilter<"Evento"> | string
    createdAt?: DateTimeFilter<"Evento"> | Date | string
    entradas?: EntradaListRelationFilter
  }, "id">

  export type EventoOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    fecha?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrder
    capacidad?: SortOrder
    precioEntrada?: SortOrder
    ubicacion?: SortOrder
    descripcion?: SortOrder
    createdAt?: SortOrder
    _count?: EventoCountOrderByAggregateInput
    _avg?: EventoAvgOrderByAggregateInput
    _max?: EventoMaxOrderByAggregateInput
    _min?: EventoMinOrderByAggregateInput
    _sum?: EventoSumOrderByAggregateInput
  }

  export type EventoScalarWhereWithAggregatesInput = {
    AND?: EventoScalarWhereWithAggregatesInput | EventoScalarWhereWithAggregatesInput[]
    OR?: EventoScalarWhereWithAggregatesInput[]
    NOT?: EventoScalarWhereWithAggregatesInput | EventoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Evento"> | number
    nombre?: StringWithAggregatesFilter<"Evento"> | string
    fecha?: DateTimeWithAggregatesFilter<"Evento"> | Date | string
    horaInicio?: StringWithAggregatesFilter<"Evento"> | string
    horaFin?: StringWithAggregatesFilter<"Evento"> | string
    capacidad?: IntWithAggregatesFilter<"Evento"> | number
    precioEntrada?: FloatWithAggregatesFilter<"Evento"> | number
    ubicacion?: StringWithAggregatesFilter<"Evento"> | string
    descripcion?: StringWithAggregatesFilter<"Evento"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Evento"> | Date | string
  }

  export type EntradaWhereInput = {
    AND?: EntradaWhereInput | EntradaWhereInput[]
    OR?: EntradaWhereInput[]
    NOT?: EntradaWhereInput | EntradaWhereInput[]
    id?: IntFilter<"Entrada"> | number
    eventoId?: IntFilter<"Entrada"> | number
    cantidad?: IntFilter<"Entrada"> | number
    precioUnitario?: FloatFilter<"Entrada"> | number
    total?: FloatFilter<"Entrada"> | number
    fechaCompra?: DateTimeFilter<"Entrada"> | Date | string
    socioId?: IntNullableFilter<"Entrada"> | number | null
    createdAt?: DateTimeFilter<"Entrada"> | Date | string
    formaDePago?: EnumFormaDePagoFilter<"Entrada"> | $Enums.FormaDePago
    comprobanteUrl?: StringNullableFilter<"Entrada"> | string | null
    evento?: XOR<EventoScalarRelationFilter, EventoWhereInput>
    socio?: XOR<SocioNullableScalarRelationFilter, SocioWhereInput> | null
  }

  export type EntradaOrderByWithRelationInput = {
    id?: SortOrder
    eventoId?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrder
    total?: SortOrder
    fechaCompra?: SortOrder
    socioId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    formaDePago?: SortOrder
    comprobanteUrl?: SortOrderInput | SortOrder
    evento?: EventoOrderByWithRelationInput
    socio?: SocioOrderByWithRelationInput
  }

  export type EntradaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EntradaWhereInput | EntradaWhereInput[]
    OR?: EntradaWhereInput[]
    NOT?: EntradaWhereInput | EntradaWhereInput[]
    eventoId?: IntFilter<"Entrada"> | number
    cantidad?: IntFilter<"Entrada"> | number
    precioUnitario?: FloatFilter<"Entrada"> | number
    total?: FloatFilter<"Entrada"> | number
    fechaCompra?: DateTimeFilter<"Entrada"> | Date | string
    socioId?: IntNullableFilter<"Entrada"> | number | null
    createdAt?: DateTimeFilter<"Entrada"> | Date | string
    formaDePago?: EnumFormaDePagoFilter<"Entrada"> | $Enums.FormaDePago
    comprobanteUrl?: StringNullableFilter<"Entrada"> | string | null
    evento?: XOR<EventoScalarRelationFilter, EventoWhereInput>
    socio?: XOR<SocioNullableScalarRelationFilter, SocioWhereInput> | null
  }, "id">

  export type EntradaOrderByWithAggregationInput = {
    id?: SortOrder
    eventoId?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrder
    total?: SortOrder
    fechaCompra?: SortOrder
    socioId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    formaDePago?: SortOrder
    comprobanteUrl?: SortOrderInput | SortOrder
    _count?: EntradaCountOrderByAggregateInput
    _avg?: EntradaAvgOrderByAggregateInput
    _max?: EntradaMaxOrderByAggregateInput
    _min?: EntradaMinOrderByAggregateInput
    _sum?: EntradaSumOrderByAggregateInput
  }

  export type EntradaScalarWhereWithAggregatesInput = {
    AND?: EntradaScalarWhereWithAggregatesInput | EntradaScalarWhereWithAggregatesInput[]
    OR?: EntradaScalarWhereWithAggregatesInput[]
    NOT?: EntradaScalarWhereWithAggregatesInput | EntradaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Entrada"> | number
    eventoId?: IntWithAggregatesFilter<"Entrada"> | number
    cantidad?: IntWithAggregatesFilter<"Entrada"> | number
    precioUnitario?: FloatWithAggregatesFilter<"Entrada"> | number
    total?: FloatWithAggregatesFilter<"Entrada"> | number
    fechaCompra?: DateTimeWithAggregatesFilter<"Entrada"> | Date | string
    socioId?: IntNullableWithAggregatesFilter<"Entrada"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Entrada"> | Date | string
    formaDePago?: EnumFormaDePagoWithAggregatesFilter<"Entrada"> | $Enums.FormaDePago
    comprobanteUrl?: StringNullableWithAggregatesFilter<"Entrada"> | string | null
  }

  export type SocioWhereInput = {
    AND?: SocioWhereInput | SocioWhereInput[]
    OR?: SocioWhereInput[]
    NOT?: SocioWhereInput | SocioWhereInput[]
    id?: IntFilter<"Socio"> | number
    nombre?: StringFilter<"Socio"> | string
    apellido?: StringFilter<"Socio"> | string
    email?: StringFilter<"Socio"> | string
    fechaNacimiento?: DateTimeFilter<"Socio"> | Date | string
    pais?: StringFilter<"Socio"> | string
    sexo?: EnumSexoFilter<"Socio"> | $Enums.Sexo
    fotoCarnet?: StringNullableFilter<"Socio"> | string | null
    dni?: IntFilter<"Socio"> | number
    usuarioId?: IntFilter<"Socio"> | number
    entradas?: EntradaListRelationFilter
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type SocioOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    fechaNacimiento?: SortOrder
    pais?: SortOrder
    sexo?: SortOrder
    fotoCarnet?: SortOrderInput | SortOrder
    dni?: SortOrder
    usuarioId?: SortOrder
    entradas?: EntradaOrderByRelationAggregateInput
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type SocioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    dni?: number
    usuarioId?: number
    AND?: SocioWhereInput | SocioWhereInput[]
    OR?: SocioWhereInput[]
    NOT?: SocioWhereInput | SocioWhereInput[]
    nombre?: StringFilter<"Socio"> | string
    apellido?: StringFilter<"Socio"> | string
    email?: StringFilter<"Socio"> | string
    fechaNacimiento?: DateTimeFilter<"Socio"> | Date | string
    pais?: StringFilter<"Socio"> | string
    sexo?: EnumSexoFilter<"Socio"> | $Enums.Sexo
    fotoCarnet?: StringNullableFilter<"Socio"> | string | null
    entradas?: EntradaListRelationFilter
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id" | "dni" | "usuarioId">

  export type SocioOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    fechaNacimiento?: SortOrder
    pais?: SortOrder
    sexo?: SortOrder
    fotoCarnet?: SortOrderInput | SortOrder
    dni?: SortOrder
    usuarioId?: SortOrder
    _count?: SocioCountOrderByAggregateInput
    _avg?: SocioAvgOrderByAggregateInput
    _max?: SocioMaxOrderByAggregateInput
    _min?: SocioMinOrderByAggregateInput
    _sum?: SocioSumOrderByAggregateInput
  }

  export type SocioScalarWhereWithAggregatesInput = {
    AND?: SocioScalarWhereWithAggregatesInput | SocioScalarWhereWithAggregatesInput[]
    OR?: SocioScalarWhereWithAggregatesInput[]
    NOT?: SocioScalarWhereWithAggregatesInput | SocioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Socio"> | number
    nombre?: StringWithAggregatesFilter<"Socio"> | string
    apellido?: StringWithAggregatesFilter<"Socio"> | string
    email?: StringWithAggregatesFilter<"Socio"> | string
    fechaNacimiento?: DateTimeWithAggregatesFilter<"Socio"> | Date | string
    pais?: StringWithAggregatesFilter<"Socio"> | string
    sexo?: EnumSexoWithAggregatesFilter<"Socio"> | $Enums.Sexo
    fotoCarnet?: StringNullableWithAggregatesFilter<"Socio"> | string | null
    dni?: IntWithAggregatesFilter<"Socio"> | number
    usuarioId?: IntWithAggregatesFilter<"Socio"> | number
  }

  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    email?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    rol?: StringFilter<"Usuario"> | string
    creadoEn?: DateTimeFilter<"Usuario"> | Date | string
    socio?: XOR<SocioNullableScalarRelationFilter, SocioWhereInput> | null
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    rol?: SortOrder
    creadoEn?: SortOrder
    socio?: SocioOrderByWithRelationInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    password?: StringFilter<"Usuario"> | string
    rol?: StringFilter<"Usuario"> | string
    creadoEn?: DateTimeFilter<"Usuario"> | Date | string
    socio?: XOR<SocioNullableScalarRelationFilter, SocioWhereInput> | null
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    rol?: SortOrder
    creadoEn?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    email?: StringWithAggregatesFilter<"Usuario"> | string
    password?: StringWithAggregatesFilter<"Usuario"> | string
    rol?: StringWithAggregatesFilter<"Usuario"> | string
    creadoEn?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type EventoCreateInput = {
    nombre: string
    fecha: Date | string
    horaInicio: string
    horaFin: string
    capacidad: number
    precioEntrada: number
    ubicacion: string
    descripcion: string
    createdAt?: Date | string
    entradas?: EntradaCreateNestedManyWithoutEventoInput
  }

  export type EventoUncheckedCreateInput = {
    id?: number
    nombre: string
    fecha: Date | string
    horaInicio: string
    horaFin: string
    capacidad: number
    precioEntrada: number
    ubicacion: string
    descripcion: string
    createdAt?: Date | string
    entradas?: EntradaUncheckedCreateNestedManyWithoutEventoInput
  }

  export type EventoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: StringFieldUpdateOperationsInput | string
    capacidad?: IntFieldUpdateOperationsInput | number
    precioEntrada?: FloatFieldUpdateOperationsInput | number
    ubicacion?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entradas?: EntradaUpdateManyWithoutEventoNestedInput
  }

  export type EventoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: StringFieldUpdateOperationsInput | string
    capacidad?: IntFieldUpdateOperationsInput | number
    precioEntrada?: FloatFieldUpdateOperationsInput | number
    ubicacion?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entradas?: EntradaUncheckedUpdateManyWithoutEventoNestedInput
  }

  export type EventoCreateManyInput = {
    id?: number
    nombre: string
    fecha: Date | string
    horaInicio: string
    horaFin: string
    capacidad: number
    precioEntrada: number
    ubicacion: string
    descripcion: string
    createdAt?: Date | string
  }

  export type EventoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: StringFieldUpdateOperationsInput | string
    capacidad?: IntFieldUpdateOperationsInput | number
    precioEntrada?: FloatFieldUpdateOperationsInput | number
    ubicacion?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: StringFieldUpdateOperationsInput | string
    capacidad?: IntFieldUpdateOperationsInput | number
    precioEntrada?: FloatFieldUpdateOperationsInput | number
    ubicacion?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntradaCreateInput = {
    cantidad: number
    precioUnitario: number
    total: number
    fechaCompra?: Date | string
    createdAt?: Date | string
    formaDePago?: $Enums.FormaDePago
    comprobanteUrl?: string | null
    evento: EventoCreateNestedOneWithoutEntradasInput
    socio?: SocioCreateNestedOneWithoutEntradasInput
  }

  export type EntradaUncheckedCreateInput = {
    id?: number
    eventoId: number
    cantidad: number
    precioUnitario: number
    total: number
    fechaCompra?: Date | string
    socioId?: number | null
    createdAt?: Date | string
    formaDePago?: $Enums.FormaDePago
    comprobanteUrl?: string | null
  }

  export type EntradaUpdateInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    fechaCompra?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    formaDePago?: EnumFormaDePagoFieldUpdateOperationsInput | $Enums.FormaDePago
    comprobanteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    evento?: EventoUpdateOneRequiredWithoutEntradasNestedInput
    socio?: SocioUpdateOneWithoutEntradasNestedInput
  }

  export type EntradaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    fechaCompra?: DateTimeFieldUpdateOperationsInput | Date | string
    socioId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    formaDePago?: EnumFormaDePagoFieldUpdateOperationsInput | $Enums.FormaDePago
    comprobanteUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EntradaCreateManyInput = {
    id?: number
    eventoId: number
    cantidad: number
    precioUnitario: number
    total: number
    fechaCompra?: Date | string
    socioId?: number | null
    createdAt?: Date | string
    formaDePago?: $Enums.FormaDePago
    comprobanteUrl?: string | null
  }

  export type EntradaUpdateManyMutationInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    fechaCompra?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    formaDePago?: EnumFormaDePagoFieldUpdateOperationsInput | $Enums.FormaDePago
    comprobanteUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EntradaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    fechaCompra?: DateTimeFieldUpdateOperationsInput | Date | string
    socioId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    formaDePago?: EnumFormaDePagoFieldUpdateOperationsInput | $Enums.FormaDePago
    comprobanteUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SocioCreateInput = {
    nombre: string
    apellido: string
    email: string
    fechaNacimiento: Date | string
    pais: string
    sexo: $Enums.Sexo
    fotoCarnet?: string | null
    dni: number
    entradas?: EntradaCreateNestedManyWithoutSocioInput
    usuario: UsuarioCreateNestedOneWithoutSocioInput
  }

  export type SocioUncheckedCreateInput = {
    id?: number
    nombre: string
    apellido: string
    email: string
    fechaNacimiento: Date | string
    pais: string
    sexo: $Enums.Sexo
    fotoCarnet?: string | null
    dni: number
    usuarioId: number
    entradas?: EntradaUncheckedCreateNestedManyWithoutSocioInput
  }

  export type SocioUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    pais?: StringFieldUpdateOperationsInput | string
    sexo?: EnumSexoFieldUpdateOperationsInput | $Enums.Sexo
    fotoCarnet?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: IntFieldUpdateOperationsInput | number
    entradas?: EntradaUpdateManyWithoutSocioNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutSocioNestedInput
  }

  export type SocioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    pais?: StringFieldUpdateOperationsInput | string
    sexo?: EnumSexoFieldUpdateOperationsInput | $Enums.Sexo
    fotoCarnet?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    entradas?: EntradaUncheckedUpdateManyWithoutSocioNestedInput
  }

  export type SocioCreateManyInput = {
    id?: number
    nombre: string
    apellido: string
    email: string
    fechaNacimiento: Date | string
    pais: string
    sexo: $Enums.Sexo
    fotoCarnet?: string | null
    dni: number
    usuarioId: number
  }

  export type SocioUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    pais?: StringFieldUpdateOperationsInput | string
    sexo?: EnumSexoFieldUpdateOperationsInput | $Enums.Sexo
    fotoCarnet?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: IntFieldUpdateOperationsInput | number
  }

  export type SocioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    pais?: StringFieldUpdateOperationsInput | string
    sexo?: EnumSexoFieldUpdateOperationsInput | $Enums.Sexo
    fotoCarnet?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type UsuarioCreateInput = {
    email: string
    password: string
    rol: string
    creadoEn?: Date | string
    socio?: SocioCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    rol: string
    creadoEn?: Date | string
    socio?: SocioUncheckedCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    socio?: SocioUpdateOneWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    socio?: SocioUncheckedUpdateOneWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    email: string
    password: string
    rol: string
    creadoEn?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EntradaListRelationFilter = {
    every?: EntradaWhereInput
    some?: EntradaWhereInput
    none?: EntradaWhereInput
  }

  export type EntradaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventoCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    fecha?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrder
    capacidad?: SortOrder
    precioEntrada?: SortOrder
    ubicacion?: SortOrder
    descripcion?: SortOrder
    createdAt?: SortOrder
  }

  export type EventoAvgOrderByAggregateInput = {
    id?: SortOrder
    capacidad?: SortOrder
    precioEntrada?: SortOrder
  }

  export type EventoMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    fecha?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrder
    capacidad?: SortOrder
    precioEntrada?: SortOrder
    ubicacion?: SortOrder
    descripcion?: SortOrder
    createdAt?: SortOrder
  }

  export type EventoMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    fecha?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrder
    capacidad?: SortOrder
    precioEntrada?: SortOrder
    ubicacion?: SortOrder
    descripcion?: SortOrder
    createdAt?: SortOrder
  }

  export type EventoSumOrderByAggregateInput = {
    id?: SortOrder
    capacidad?: SortOrder
    precioEntrada?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumFormaDePagoFilter<$PrismaModel = never> = {
    equals?: $Enums.FormaDePago | EnumFormaDePagoFieldRefInput<$PrismaModel>
    in?: $Enums.FormaDePago[] | ListEnumFormaDePagoFieldRefInput<$PrismaModel>
    notIn?: $Enums.FormaDePago[] | ListEnumFormaDePagoFieldRefInput<$PrismaModel>
    not?: NestedEnumFormaDePagoFilter<$PrismaModel> | $Enums.FormaDePago
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EventoScalarRelationFilter = {
    is?: EventoWhereInput
    isNot?: EventoWhereInput
  }

  export type SocioNullableScalarRelationFilter = {
    is?: SocioWhereInput | null
    isNot?: SocioWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EntradaCountOrderByAggregateInput = {
    id?: SortOrder
    eventoId?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrder
    total?: SortOrder
    fechaCompra?: SortOrder
    socioId?: SortOrder
    createdAt?: SortOrder
    formaDePago?: SortOrder
    comprobanteUrl?: SortOrder
  }

  export type EntradaAvgOrderByAggregateInput = {
    id?: SortOrder
    eventoId?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrder
    total?: SortOrder
    socioId?: SortOrder
  }

  export type EntradaMaxOrderByAggregateInput = {
    id?: SortOrder
    eventoId?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrder
    total?: SortOrder
    fechaCompra?: SortOrder
    socioId?: SortOrder
    createdAt?: SortOrder
    formaDePago?: SortOrder
    comprobanteUrl?: SortOrder
  }

  export type EntradaMinOrderByAggregateInput = {
    id?: SortOrder
    eventoId?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrder
    total?: SortOrder
    fechaCompra?: SortOrder
    socioId?: SortOrder
    createdAt?: SortOrder
    formaDePago?: SortOrder
    comprobanteUrl?: SortOrder
  }

  export type EntradaSumOrderByAggregateInput = {
    id?: SortOrder
    eventoId?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrder
    total?: SortOrder
    socioId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumFormaDePagoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FormaDePago | EnumFormaDePagoFieldRefInput<$PrismaModel>
    in?: $Enums.FormaDePago[] | ListEnumFormaDePagoFieldRefInput<$PrismaModel>
    notIn?: $Enums.FormaDePago[] | ListEnumFormaDePagoFieldRefInput<$PrismaModel>
    not?: NestedEnumFormaDePagoWithAggregatesFilter<$PrismaModel> | $Enums.FormaDePago
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFormaDePagoFilter<$PrismaModel>
    _max?: NestedEnumFormaDePagoFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumSexoFilter<$PrismaModel = never> = {
    equals?: $Enums.Sexo | EnumSexoFieldRefInput<$PrismaModel>
    in?: $Enums.Sexo[] | ListEnumSexoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Sexo[] | ListEnumSexoFieldRefInput<$PrismaModel>
    not?: NestedEnumSexoFilter<$PrismaModel> | $Enums.Sexo
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type SocioCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    fechaNacimiento?: SortOrder
    pais?: SortOrder
    sexo?: SortOrder
    fotoCarnet?: SortOrder
    dni?: SortOrder
    usuarioId?: SortOrder
  }

  export type SocioAvgOrderByAggregateInput = {
    id?: SortOrder
    dni?: SortOrder
    usuarioId?: SortOrder
  }

  export type SocioMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    fechaNacimiento?: SortOrder
    pais?: SortOrder
    sexo?: SortOrder
    fotoCarnet?: SortOrder
    dni?: SortOrder
    usuarioId?: SortOrder
  }

  export type SocioMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    fechaNacimiento?: SortOrder
    pais?: SortOrder
    sexo?: SortOrder
    fotoCarnet?: SortOrder
    dni?: SortOrder
    usuarioId?: SortOrder
  }

  export type SocioSumOrderByAggregateInput = {
    id?: SortOrder
    dni?: SortOrder
    usuarioId?: SortOrder
  }

  export type EnumSexoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Sexo | EnumSexoFieldRefInput<$PrismaModel>
    in?: $Enums.Sexo[] | ListEnumSexoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Sexo[] | ListEnumSexoFieldRefInput<$PrismaModel>
    not?: NestedEnumSexoWithAggregatesFilter<$PrismaModel> | $Enums.Sexo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSexoFilter<$PrismaModel>
    _max?: NestedEnumSexoFilter<$PrismaModel>
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    rol?: SortOrder
    creadoEn?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    rol?: SortOrder
    creadoEn?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    rol?: SortOrder
    creadoEn?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EntradaCreateNestedManyWithoutEventoInput = {
    create?: XOR<EntradaCreateWithoutEventoInput, EntradaUncheckedCreateWithoutEventoInput> | EntradaCreateWithoutEventoInput[] | EntradaUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: EntradaCreateOrConnectWithoutEventoInput | EntradaCreateOrConnectWithoutEventoInput[]
    createMany?: EntradaCreateManyEventoInputEnvelope
    connect?: EntradaWhereUniqueInput | EntradaWhereUniqueInput[]
  }

  export type EntradaUncheckedCreateNestedManyWithoutEventoInput = {
    create?: XOR<EntradaCreateWithoutEventoInput, EntradaUncheckedCreateWithoutEventoInput> | EntradaCreateWithoutEventoInput[] | EntradaUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: EntradaCreateOrConnectWithoutEventoInput | EntradaCreateOrConnectWithoutEventoInput[]
    createMany?: EntradaCreateManyEventoInputEnvelope
    connect?: EntradaWhereUniqueInput | EntradaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EntradaUpdateManyWithoutEventoNestedInput = {
    create?: XOR<EntradaCreateWithoutEventoInput, EntradaUncheckedCreateWithoutEventoInput> | EntradaCreateWithoutEventoInput[] | EntradaUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: EntradaCreateOrConnectWithoutEventoInput | EntradaCreateOrConnectWithoutEventoInput[]
    upsert?: EntradaUpsertWithWhereUniqueWithoutEventoInput | EntradaUpsertWithWhereUniqueWithoutEventoInput[]
    createMany?: EntradaCreateManyEventoInputEnvelope
    set?: EntradaWhereUniqueInput | EntradaWhereUniqueInput[]
    disconnect?: EntradaWhereUniqueInput | EntradaWhereUniqueInput[]
    delete?: EntradaWhereUniqueInput | EntradaWhereUniqueInput[]
    connect?: EntradaWhereUniqueInput | EntradaWhereUniqueInput[]
    update?: EntradaUpdateWithWhereUniqueWithoutEventoInput | EntradaUpdateWithWhereUniqueWithoutEventoInput[]
    updateMany?: EntradaUpdateManyWithWhereWithoutEventoInput | EntradaUpdateManyWithWhereWithoutEventoInput[]
    deleteMany?: EntradaScalarWhereInput | EntradaScalarWhereInput[]
  }

  export type EntradaUncheckedUpdateManyWithoutEventoNestedInput = {
    create?: XOR<EntradaCreateWithoutEventoInput, EntradaUncheckedCreateWithoutEventoInput> | EntradaCreateWithoutEventoInput[] | EntradaUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: EntradaCreateOrConnectWithoutEventoInput | EntradaCreateOrConnectWithoutEventoInput[]
    upsert?: EntradaUpsertWithWhereUniqueWithoutEventoInput | EntradaUpsertWithWhereUniqueWithoutEventoInput[]
    createMany?: EntradaCreateManyEventoInputEnvelope
    set?: EntradaWhereUniqueInput | EntradaWhereUniqueInput[]
    disconnect?: EntradaWhereUniqueInput | EntradaWhereUniqueInput[]
    delete?: EntradaWhereUniqueInput | EntradaWhereUniqueInput[]
    connect?: EntradaWhereUniqueInput | EntradaWhereUniqueInput[]
    update?: EntradaUpdateWithWhereUniqueWithoutEventoInput | EntradaUpdateWithWhereUniqueWithoutEventoInput[]
    updateMany?: EntradaUpdateManyWithWhereWithoutEventoInput | EntradaUpdateManyWithWhereWithoutEventoInput[]
    deleteMany?: EntradaScalarWhereInput | EntradaScalarWhereInput[]
  }

  export type EventoCreateNestedOneWithoutEntradasInput = {
    create?: XOR<EventoCreateWithoutEntradasInput, EventoUncheckedCreateWithoutEntradasInput>
    connectOrCreate?: EventoCreateOrConnectWithoutEntradasInput
    connect?: EventoWhereUniqueInput
  }

  export type SocioCreateNestedOneWithoutEntradasInput = {
    create?: XOR<SocioCreateWithoutEntradasInput, SocioUncheckedCreateWithoutEntradasInput>
    connectOrCreate?: SocioCreateOrConnectWithoutEntradasInput
    connect?: SocioWhereUniqueInput
  }

  export type EnumFormaDePagoFieldUpdateOperationsInput = {
    set?: $Enums.FormaDePago
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EventoUpdateOneRequiredWithoutEntradasNestedInput = {
    create?: XOR<EventoCreateWithoutEntradasInput, EventoUncheckedCreateWithoutEntradasInput>
    connectOrCreate?: EventoCreateOrConnectWithoutEntradasInput
    upsert?: EventoUpsertWithoutEntradasInput
    connect?: EventoWhereUniqueInput
    update?: XOR<XOR<EventoUpdateToOneWithWhereWithoutEntradasInput, EventoUpdateWithoutEntradasInput>, EventoUncheckedUpdateWithoutEntradasInput>
  }

  export type SocioUpdateOneWithoutEntradasNestedInput = {
    create?: XOR<SocioCreateWithoutEntradasInput, SocioUncheckedCreateWithoutEntradasInput>
    connectOrCreate?: SocioCreateOrConnectWithoutEntradasInput
    upsert?: SocioUpsertWithoutEntradasInput
    disconnect?: SocioWhereInput | boolean
    delete?: SocioWhereInput | boolean
    connect?: SocioWhereUniqueInput
    update?: XOR<XOR<SocioUpdateToOneWithWhereWithoutEntradasInput, SocioUpdateWithoutEntradasInput>, SocioUncheckedUpdateWithoutEntradasInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EntradaCreateNestedManyWithoutSocioInput = {
    create?: XOR<EntradaCreateWithoutSocioInput, EntradaUncheckedCreateWithoutSocioInput> | EntradaCreateWithoutSocioInput[] | EntradaUncheckedCreateWithoutSocioInput[]
    connectOrCreate?: EntradaCreateOrConnectWithoutSocioInput | EntradaCreateOrConnectWithoutSocioInput[]
    createMany?: EntradaCreateManySocioInputEnvelope
    connect?: EntradaWhereUniqueInput | EntradaWhereUniqueInput[]
  }

  export type UsuarioCreateNestedOneWithoutSocioInput = {
    create?: XOR<UsuarioCreateWithoutSocioInput, UsuarioUncheckedCreateWithoutSocioInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutSocioInput
    connect?: UsuarioWhereUniqueInput
  }

  export type EntradaUncheckedCreateNestedManyWithoutSocioInput = {
    create?: XOR<EntradaCreateWithoutSocioInput, EntradaUncheckedCreateWithoutSocioInput> | EntradaCreateWithoutSocioInput[] | EntradaUncheckedCreateWithoutSocioInput[]
    connectOrCreate?: EntradaCreateOrConnectWithoutSocioInput | EntradaCreateOrConnectWithoutSocioInput[]
    createMany?: EntradaCreateManySocioInputEnvelope
    connect?: EntradaWhereUniqueInput | EntradaWhereUniqueInput[]
  }

  export type EnumSexoFieldUpdateOperationsInput = {
    set?: $Enums.Sexo
  }

  export type EntradaUpdateManyWithoutSocioNestedInput = {
    create?: XOR<EntradaCreateWithoutSocioInput, EntradaUncheckedCreateWithoutSocioInput> | EntradaCreateWithoutSocioInput[] | EntradaUncheckedCreateWithoutSocioInput[]
    connectOrCreate?: EntradaCreateOrConnectWithoutSocioInput | EntradaCreateOrConnectWithoutSocioInput[]
    upsert?: EntradaUpsertWithWhereUniqueWithoutSocioInput | EntradaUpsertWithWhereUniqueWithoutSocioInput[]
    createMany?: EntradaCreateManySocioInputEnvelope
    set?: EntradaWhereUniqueInput | EntradaWhereUniqueInput[]
    disconnect?: EntradaWhereUniqueInput | EntradaWhereUniqueInput[]
    delete?: EntradaWhereUniqueInput | EntradaWhereUniqueInput[]
    connect?: EntradaWhereUniqueInput | EntradaWhereUniqueInput[]
    update?: EntradaUpdateWithWhereUniqueWithoutSocioInput | EntradaUpdateWithWhereUniqueWithoutSocioInput[]
    updateMany?: EntradaUpdateManyWithWhereWithoutSocioInput | EntradaUpdateManyWithWhereWithoutSocioInput[]
    deleteMany?: EntradaScalarWhereInput | EntradaScalarWhereInput[]
  }

  export type UsuarioUpdateOneRequiredWithoutSocioNestedInput = {
    create?: XOR<UsuarioCreateWithoutSocioInput, UsuarioUncheckedCreateWithoutSocioInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutSocioInput
    upsert?: UsuarioUpsertWithoutSocioInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutSocioInput, UsuarioUpdateWithoutSocioInput>, UsuarioUncheckedUpdateWithoutSocioInput>
  }

  export type EntradaUncheckedUpdateManyWithoutSocioNestedInput = {
    create?: XOR<EntradaCreateWithoutSocioInput, EntradaUncheckedCreateWithoutSocioInput> | EntradaCreateWithoutSocioInput[] | EntradaUncheckedCreateWithoutSocioInput[]
    connectOrCreate?: EntradaCreateOrConnectWithoutSocioInput | EntradaCreateOrConnectWithoutSocioInput[]
    upsert?: EntradaUpsertWithWhereUniqueWithoutSocioInput | EntradaUpsertWithWhereUniqueWithoutSocioInput[]
    createMany?: EntradaCreateManySocioInputEnvelope
    set?: EntradaWhereUniqueInput | EntradaWhereUniqueInput[]
    disconnect?: EntradaWhereUniqueInput | EntradaWhereUniqueInput[]
    delete?: EntradaWhereUniqueInput | EntradaWhereUniqueInput[]
    connect?: EntradaWhereUniqueInput | EntradaWhereUniqueInput[]
    update?: EntradaUpdateWithWhereUniqueWithoutSocioInput | EntradaUpdateWithWhereUniqueWithoutSocioInput[]
    updateMany?: EntradaUpdateManyWithWhereWithoutSocioInput | EntradaUpdateManyWithWhereWithoutSocioInput[]
    deleteMany?: EntradaScalarWhereInput | EntradaScalarWhereInput[]
  }

  export type SocioCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<SocioCreateWithoutUsuarioInput, SocioUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: SocioCreateOrConnectWithoutUsuarioInput
    connect?: SocioWhereUniqueInput
  }

  export type SocioUncheckedCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<SocioCreateWithoutUsuarioInput, SocioUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: SocioCreateOrConnectWithoutUsuarioInput
    connect?: SocioWhereUniqueInput
  }

  export type SocioUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<SocioCreateWithoutUsuarioInput, SocioUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: SocioCreateOrConnectWithoutUsuarioInput
    upsert?: SocioUpsertWithoutUsuarioInput
    disconnect?: SocioWhereInput | boolean
    delete?: SocioWhereInput | boolean
    connect?: SocioWhereUniqueInput
    update?: XOR<XOR<SocioUpdateToOneWithWhereWithoutUsuarioInput, SocioUpdateWithoutUsuarioInput>, SocioUncheckedUpdateWithoutUsuarioInput>
  }

  export type SocioUncheckedUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<SocioCreateWithoutUsuarioInput, SocioUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: SocioCreateOrConnectWithoutUsuarioInput
    upsert?: SocioUpsertWithoutUsuarioInput
    disconnect?: SocioWhereInput | boolean
    delete?: SocioWhereInput | boolean
    connect?: SocioWhereUniqueInput
    update?: XOR<XOR<SocioUpdateToOneWithWhereWithoutUsuarioInput, SocioUpdateWithoutUsuarioInput>, SocioUncheckedUpdateWithoutUsuarioInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumFormaDePagoFilter<$PrismaModel = never> = {
    equals?: $Enums.FormaDePago | EnumFormaDePagoFieldRefInput<$PrismaModel>
    in?: $Enums.FormaDePago[] | ListEnumFormaDePagoFieldRefInput<$PrismaModel>
    notIn?: $Enums.FormaDePago[] | ListEnumFormaDePagoFieldRefInput<$PrismaModel>
    not?: NestedEnumFormaDePagoFilter<$PrismaModel> | $Enums.FormaDePago
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumFormaDePagoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FormaDePago | EnumFormaDePagoFieldRefInput<$PrismaModel>
    in?: $Enums.FormaDePago[] | ListEnumFormaDePagoFieldRefInput<$PrismaModel>
    notIn?: $Enums.FormaDePago[] | ListEnumFormaDePagoFieldRefInput<$PrismaModel>
    not?: NestedEnumFormaDePagoWithAggregatesFilter<$PrismaModel> | $Enums.FormaDePago
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFormaDePagoFilter<$PrismaModel>
    _max?: NestedEnumFormaDePagoFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumSexoFilter<$PrismaModel = never> = {
    equals?: $Enums.Sexo | EnumSexoFieldRefInput<$PrismaModel>
    in?: $Enums.Sexo[] | ListEnumSexoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Sexo[] | ListEnumSexoFieldRefInput<$PrismaModel>
    not?: NestedEnumSexoFilter<$PrismaModel> | $Enums.Sexo
  }

  export type NestedEnumSexoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Sexo | EnumSexoFieldRefInput<$PrismaModel>
    in?: $Enums.Sexo[] | ListEnumSexoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Sexo[] | ListEnumSexoFieldRefInput<$PrismaModel>
    not?: NestedEnumSexoWithAggregatesFilter<$PrismaModel> | $Enums.Sexo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSexoFilter<$PrismaModel>
    _max?: NestedEnumSexoFilter<$PrismaModel>
  }

  export type EntradaCreateWithoutEventoInput = {
    cantidad: number
    precioUnitario: number
    total: number
    fechaCompra?: Date | string
    createdAt?: Date | string
    formaDePago?: $Enums.FormaDePago
    comprobanteUrl?: string | null
    socio?: SocioCreateNestedOneWithoutEntradasInput
  }

  export type EntradaUncheckedCreateWithoutEventoInput = {
    id?: number
    cantidad: number
    precioUnitario: number
    total: number
    fechaCompra?: Date | string
    socioId?: number | null
    createdAt?: Date | string
    formaDePago?: $Enums.FormaDePago
    comprobanteUrl?: string | null
  }

  export type EntradaCreateOrConnectWithoutEventoInput = {
    where: EntradaWhereUniqueInput
    create: XOR<EntradaCreateWithoutEventoInput, EntradaUncheckedCreateWithoutEventoInput>
  }

  export type EntradaCreateManyEventoInputEnvelope = {
    data: EntradaCreateManyEventoInput | EntradaCreateManyEventoInput[]
    skipDuplicates?: boolean
  }

  export type EntradaUpsertWithWhereUniqueWithoutEventoInput = {
    where: EntradaWhereUniqueInput
    update: XOR<EntradaUpdateWithoutEventoInput, EntradaUncheckedUpdateWithoutEventoInput>
    create: XOR<EntradaCreateWithoutEventoInput, EntradaUncheckedCreateWithoutEventoInput>
  }

  export type EntradaUpdateWithWhereUniqueWithoutEventoInput = {
    where: EntradaWhereUniqueInput
    data: XOR<EntradaUpdateWithoutEventoInput, EntradaUncheckedUpdateWithoutEventoInput>
  }

  export type EntradaUpdateManyWithWhereWithoutEventoInput = {
    where: EntradaScalarWhereInput
    data: XOR<EntradaUpdateManyMutationInput, EntradaUncheckedUpdateManyWithoutEventoInput>
  }

  export type EntradaScalarWhereInput = {
    AND?: EntradaScalarWhereInput | EntradaScalarWhereInput[]
    OR?: EntradaScalarWhereInput[]
    NOT?: EntradaScalarWhereInput | EntradaScalarWhereInput[]
    id?: IntFilter<"Entrada"> | number
    eventoId?: IntFilter<"Entrada"> | number
    cantidad?: IntFilter<"Entrada"> | number
    precioUnitario?: FloatFilter<"Entrada"> | number
    total?: FloatFilter<"Entrada"> | number
    fechaCompra?: DateTimeFilter<"Entrada"> | Date | string
    socioId?: IntNullableFilter<"Entrada"> | number | null
    createdAt?: DateTimeFilter<"Entrada"> | Date | string
    formaDePago?: EnumFormaDePagoFilter<"Entrada"> | $Enums.FormaDePago
    comprobanteUrl?: StringNullableFilter<"Entrada"> | string | null
  }

  export type EventoCreateWithoutEntradasInput = {
    nombre: string
    fecha: Date | string
    horaInicio: string
    horaFin: string
    capacidad: number
    precioEntrada: number
    ubicacion: string
    descripcion: string
    createdAt?: Date | string
  }

  export type EventoUncheckedCreateWithoutEntradasInput = {
    id?: number
    nombre: string
    fecha: Date | string
    horaInicio: string
    horaFin: string
    capacidad: number
    precioEntrada: number
    ubicacion: string
    descripcion: string
    createdAt?: Date | string
  }

  export type EventoCreateOrConnectWithoutEntradasInput = {
    where: EventoWhereUniqueInput
    create: XOR<EventoCreateWithoutEntradasInput, EventoUncheckedCreateWithoutEntradasInput>
  }

  export type SocioCreateWithoutEntradasInput = {
    nombre: string
    apellido: string
    email: string
    fechaNacimiento: Date | string
    pais: string
    sexo: $Enums.Sexo
    fotoCarnet?: string | null
    dni: number
    usuario: UsuarioCreateNestedOneWithoutSocioInput
  }

  export type SocioUncheckedCreateWithoutEntradasInput = {
    id?: number
    nombre: string
    apellido: string
    email: string
    fechaNacimiento: Date | string
    pais: string
    sexo: $Enums.Sexo
    fotoCarnet?: string | null
    dni: number
    usuarioId: number
  }

  export type SocioCreateOrConnectWithoutEntradasInput = {
    where: SocioWhereUniqueInput
    create: XOR<SocioCreateWithoutEntradasInput, SocioUncheckedCreateWithoutEntradasInput>
  }

  export type EventoUpsertWithoutEntradasInput = {
    update: XOR<EventoUpdateWithoutEntradasInput, EventoUncheckedUpdateWithoutEntradasInput>
    create: XOR<EventoCreateWithoutEntradasInput, EventoUncheckedCreateWithoutEntradasInput>
    where?: EventoWhereInput
  }

  export type EventoUpdateToOneWithWhereWithoutEntradasInput = {
    where?: EventoWhereInput
    data: XOR<EventoUpdateWithoutEntradasInput, EventoUncheckedUpdateWithoutEntradasInput>
  }

  export type EventoUpdateWithoutEntradasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: StringFieldUpdateOperationsInput | string
    capacidad?: IntFieldUpdateOperationsInput | number
    precioEntrada?: FloatFieldUpdateOperationsInput | number
    ubicacion?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventoUncheckedUpdateWithoutEntradasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: StringFieldUpdateOperationsInput | string
    capacidad?: IntFieldUpdateOperationsInput | number
    precioEntrada?: FloatFieldUpdateOperationsInput | number
    ubicacion?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocioUpsertWithoutEntradasInput = {
    update: XOR<SocioUpdateWithoutEntradasInput, SocioUncheckedUpdateWithoutEntradasInput>
    create: XOR<SocioCreateWithoutEntradasInput, SocioUncheckedCreateWithoutEntradasInput>
    where?: SocioWhereInput
  }

  export type SocioUpdateToOneWithWhereWithoutEntradasInput = {
    where?: SocioWhereInput
    data: XOR<SocioUpdateWithoutEntradasInput, SocioUncheckedUpdateWithoutEntradasInput>
  }

  export type SocioUpdateWithoutEntradasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    pais?: StringFieldUpdateOperationsInput | string
    sexo?: EnumSexoFieldUpdateOperationsInput | $Enums.Sexo
    fotoCarnet?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: IntFieldUpdateOperationsInput | number
    usuario?: UsuarioUpdateOneRequiredWithoutSocioNestedInput
  }

  export type SocioUncheckedUpdateWithoutEntradasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    pais?: StringFieldUpdateOperationsInput | string
    sexo?: EnumSexoFieldUpdateOperationsInput | $Enums.Sexo
    fotoCarnet?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type EntradaCreateWithoutSocioInput = {
    cantidad: number
    precioUnitario: number
    total: number
    fechaCompra?: Date | string
    createdAt?: Date | string
    formaDePago?: $Enums.FormaDePago
    comprobanteUrl?: string | null
    evento: EventoCreateNestedOneWithoutEntradasInput
  }

  export type EntradaUncheckedCreateWithoutSocioInput = {
    id?: number
    eventoId: number
    cantidad: number
    precioUnitario: number
    total: number
    fechaCompra?: Date | string
    createdAt?: Date | string
    formaDePago?: $Enums.FormaDePago
    comprobanteUrl?: string | null
  }

  export type EntradaCreateOrConnectWithoutSocioInput = {
    where: EntradaWhereUniqueInput
    create: XOR<EntradaCreateWithoutSocioInput, EntradaUncheckedCreateWithoutSocioInput>
  }

  export type EntradaCreateManySocioInputEnvelope = {
    data: EntradaCreateManySocioInput | EntradaCreateManySocioInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioCreateWithoutSocioInput = {
    email: string
    password: string
    rol: string
    creadoEn?: Date | string
  }

  export type UsuarioUncheckedCreateWithoutSocioInput = {
    id?: number
    email: string
    password: string
    rol: string
    creadoEn?: Date | string
  }

  export type UsuarioCreateOrConnectWithoutSocioInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutSocioInput, UsuarioUncheckedCreateWithoutSocioInput>
  }

  export type EntradaUpsertWithWhereUniqueWithoutSocioInput = {
    where: EntradaWhereUniqueInput
    update: XOR<EntradaUpdateWithoutSocioInput, EntradaUncheckedUpdateWithoutSocioInput>
    create: XOR<EntradaCreateWithoutSocioInput, EntradaUncheckedCreateWithoutSocioInput>
  }

  export type EntradaUpdateWithWhereUniqueWithoutSocioInput = {
    where: EntradaWhereUniqueInput
    data: XOR<EntradaUpdateWithoutSocioInput, EntradaUncheckedUpdateWithoutSocioInput>
  }

  export type EntradaUpdateManyWithWhereWithoutSocioInput = {
    where: EntradaScalarWhereInput
    data: XOR<EntradaUpdateManyMutationInput, EntradaUncheckedUpdateManyWithoutSocioInput>
  }

  export type UsuarioUpsertWithoutSocioInput = {
    update: XOR<UsuarioUpdateWithoutSocioInput, UsuarioUncheckedUpdateWithoutSocioInput>
    create: XOR<UsuarioCreateWithoutSocioInput, UsuarioUncheckedCreateWithoutSocioInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutSocioInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutSocioInput, UsuarioUncheckedUpdateWithoutSocioInput>
  }

  export type UsuarioUpdateWithoutSocioInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateWithoutSocioInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocioCreateWithoutUsuarioInput = {
    nombre: string
    apellido: string
    email: string
    fechaNacimiento: Date | string
    pais: string
    sexo: $Enums.Sexo
    fotoCarnet?: string | null
    dni: number
    entradas?: EntradaCreateNestedManyWithoutSocioInput
  }

  export type SocioUncheckedCreateWithoutUsuarioInput = {
    id?: number
    nombre: string
    apellido: string
    email: string
    fechaNacimiento: Date | string
    pais: string
    sexo: $Enums.Sexo
    fotoCarnet?: string | null
    dni: number
    entradas?: EntradaUncheckedCreateNestedManyWithoutSocioInput
  }

  export type SocioCreateOrConnectWithoutUsuarioInput = {
    where: SocioWhereUniqueInput
    create: XOR<SocioCreateWithoutUsuarioInput, SocioUncheckedCreateWithoutUsuarioInput>
  }

  export type SocioUpsertWithoutUsuarioInput = {
    update: XOR<SocioUpdateWithoutUsuarioInput, SocioUncheckedUpdateWithoutUsuarioInput>
    create: XOR<SocioCreateWithoutUsuarioInput, SocioUncheckedCreateWithoutUsuarioInput>
    where?: SocioWhereInput
  }

  export type SocioUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: SocioWhereInput
    data: XOR<SocioUpdateWithoutUsuarioInput, SocioUncheckedUpdateWithoutUsuarioInput>
  }

  export type SocioUpdateWithoutUsuarioInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    pais?: StringFieldUpdateOperationsInput | string
    sexo?: EnumSexoFieldUpdateOperationsInput | $Enums.Sexo
    fotoCarnet?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: IntFieldUpdateOperationsInput | number
    entradas?: EntradaUpdateManyWithoutSocioNestedInput
  }

  export type SocioUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    pais?: StringFieldUpdateOperationsInput | string
    sexo?: EnumSexoFieldUpdateOperationsInput | $Enums.Sexo
    fotoCarnet?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: IntFieldUpdateOperationsInput | number
    entradas?: EntradaUncheckedUpdateManyWithoutSocioNestedInput
  }

  export type EntradaCreateManyEventoInput = {
    id?: number
    cantidad: number
    precioUnitario: number
    total: number
    fechaCompra?: Date | string
    socioId?: number | null
    createdAt?: Date | string
    formaDePago?: $Enums.FormaDePago
    comprobanteUrl?: string | null
  }

  export type EntradaUpdateWithoutEventoInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    fechaCompra?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    formaDePago?: EnumFormaDePagoFieldUpdateOperationsInput | $Enums.FormaDePago
    comprobanteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    socio?: SocioUpdateOneWithoutEntradasNestedInput
  }

  export type EntradaUncheckedUpdateWithoutEventoInput = {
    id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    fechaCompra?: DateTimeFieldUpdateOperationsInput | Date | string
    socioId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    formaDePago?: EnumFormaDePagoFieldUpdateOperationsInput | $Enums.FormaDePago
    comprobanteUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EntradaUncheckedUpdateManyWithoutEventoInput = {
    id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    fechaCompra?: DateTimeFieldUpdateOperationsInput | Date | string
    socioId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    formaDePago?: EnumFormaDePagoFieldUpdateOperationsInput | $Enums.FormaDePago
    comprobanteUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EntradaCreateManySocioInput = {
    id?: number
    eventoId: number
    cantidad: number
    precioUnitario: number
    total: number
    fechaCompra?: Date | string
    createdAt?: Date | string
    formaDePago?: $Enums.FormaDePago
    comprobanteUrl?: string | null
  }

  export type EntradaUpdateWithoutSocioInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    fechaCompra?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    formaDePago?: EnumFormaDePagoFieldUpdateOperationsInput | $Enums.FormaDePago
    comprobanteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    evento?: EventoUpdateOneRequiredWithoutEntradasNestedInput
  }

  export type EntradaUncheckedUpdateWithoutSocioInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    fechaCompra?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    formaDePago?: EnumFormaDePagoFieldUpdateOperationsInput | $Enums.FormaDePago
    comprobanteUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EntradaUncheckedUpdateManyWithoutSocioInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    fechaCompra?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    formaDePago?: EnumFormaDePagoFieldUpdateOperationsInput | $Enums.FormaDePago
    comprobanteUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}