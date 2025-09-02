
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
 * Model Actividad
 * 
 */
export type Actividad = $Result.DefaultSelection<Prisma.$ActividadPayload>
/**
 * Model Clase
 * 
 */
export type Clase = $Result.DefaultSelection<Prisma.$ClasePayload>
/**
 * Model Cuota
 * 
 */
export type Cuota = $Result.DefaultSelection<Prisma.$CuotaPayload>
/**
 * Model Comprobante
 * 
 */
export type Comprobante = $Result.DefaultSelection<Prisma.$ComprobantePayload>
/**
 * Model Profesor
 * 
 */
export type Profesor = $Result.DefaultSelection<Prisma.$ProfesorPayload>
/**
 * Model ClaseSocio
 * 
 */
export type ClaseSocio = $Result.DefaultSelection<Prisma.$ClaseSocioPayload>

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
  MASCULINO: 'MASCULINO',
  FEMENINO: 'FEMENINO',
  OTRO: 'OTRO'
};

export type Sexo = (typeof Sexo)[keyof typeof Sexo]


export const DiaSemana: {
  LUNES: 'LUNES',
  MARTES: 'MARTES',
  MIERCOLES: 'MIERCOLES',
  JUEVES: 'JUEVES',
  VIERNES: 'VIERNES',
  SABADO: 'SABADO',
  DOMINGO: 'DOMINGO'
};

export type DiaSemana = (typeof DiaSemana)[keyof typeof DiaSemana]


export const estado_cuota: {
  PENDIENTE: 'PENDIENTE',
  VENCIDA: 'VENCIDA',
  PAGADA: 'PAGADA',
  EN_REVISION: 'EN_REVISION'
};

export type estado_cuota = (typeof estado_cuota)[keyof typeof estado_cuota]


export const Mes: {
  ENERO: 'ENERO',
  FEBRERO: 'FEBRERO',
  MARZO: 'MARZO',
  ABRIL: 'ABRIL',
  MAYO: 'MAYO',
  JUNIO: 'JUNIO',
  JULIO: 'JULIO',
  AGOSTO: 'AGOSTO',
  SEPTIEMBRE: 'SEPTIEMBRE',
  OCTUBRE: 'OCTUBRE',
  NOVIEMBRE: 'NOVIEMBRE',
  DICIEMBRE: 'DICIEMBRE'
};

export type Mes = (typeof Mes)[keyof typeof Mes]


export const forma_de_pago: {
  TRANSFERENCIA: 'TRANSFERENCIA',
  EFECTIVO: 'EFECTIVO'
};

export type forma_de_pago = (typeof forma_de_pago)[keyof typeof forma_de_pago]

}

export type FormaDePago = $Enums.FormaDePago

export const FormaDePago: typeof $Enums.FormaDePago

export type Sexo = $Enums.Sexo

export const Sexo: typeof $Enums.Sexo

export type DiaSemana = $Enums.DiaSemana

export const DiaSemana: typeof $Enums.DiaSemana

export type estado_cuota = $Enums.estado_cuota

export const estado_cuota: typeof $Enums.estado_cuota

export type Mes = $Enums.Mes

export const Mes: typeof $Enums.Mes

export type forma_de_pago = $Enums.forma_de_pago

export const forma_de_pago: typeof $Enums.forma_de_pago

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

  /**
   * `prisma.actividad`: Exposes CRUD operations for the **Actividad** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Actividads
    * const actividads = await prisma.actividad.findMany()
    * ```
    */
  get actividad(): Prisma.ActividadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.clase`: Exposes CRUD operations for the **Clase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clases
    * const clases = await prisma.clase.findMany()
    * ```
    */
  get clase(): Prisma.ClaseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cuota`: Exposes CRUD operations for the **Cuota** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cuotas
    * const cuotas = await prisma.cuota.findMany()
    * ```
    */
  get cuota(): Prisma.CuotaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comprobante`: Exposes CRUD operations for the **Comprobante** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comprobantes
    * const comprobantes = await prisma.comprobante.findMany()
    * ```
    */
  get comprobante(): Prisma.ComprobanteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profesor`: Exposes CRUD operations for the **Profesor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profesors
    * const profesors = await prisma.profesor.findMany()
    * ```
    */
  get profesor(): Prisma.ProfesorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.claseSocio`: Exposes CRUD operations for the **ClaseSocio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClaseSocios
    * const claseSocios = await prisma.claseSocio.findMany()
    * ```
    */
  get claseSocio(): Prisma.ClaseSocioDelegate<ExtArgs, ClientOptions>;
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
    Usuario: 'Usuario',
    Actividad: 'Actividad',
    Clase: 'Clase',
    Cuota: 'Cuota',
    Comprobante: 'Comprobante',
    Profesor: 'Profesor',
    ClaseSocio: 'ClaseSocio'
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
      modelProps: "evento" | "entrada" | "socio" | "usuario" | "actividad" | "clase" | "cuota" | "comprobante" | "profesor" | "claseSocio"
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
      Actividad: {
        payload: Prisma.$ActividadPayload<ExtArgs>
        fields: Prisma.ActividadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActividadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActividadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActividadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActividadPayload>
          }
          findFirst: {
            args: Prisma.ActividadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActividadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActividadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActividadPayload>
          }
          findMany: {
            args: Prisma.ActividadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActividadPayload>[]
          }
          create: {
            args: Prisma.ActividadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActividadPayload>
          }
          createMany: {
            args: Prisma.ActividadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActividadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActividadPayload>[]
          }
          delete: {
            args: Prisma.ActividadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActividadPayload>
          }
          update: {
            args: Prisma.ActividadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActividadPayload>
          }
          deleteMany: {
            args: Prisma.ActividadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActividadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActividadUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActividadPayload>[]
          }
          upsert: {
            args: Prisma.ActividadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActividadPayload>
          }
          aggregate: {
            args: Prisma.ActividadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActividad>
          }
          groupBy: {
            args: Prisma.ActividadGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActividadGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActividadCountArgs<ExtArgs>
            result: $Utils.Optional<ActividadCountAggregateOutputType> | number
          }
        }
      }
      Clase: {
        payload: Prisma.$ClasePayload<ExtArgs>
        fields: Prisma.ClaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClasePayload>
          }
          findFirst: {
            args: Prisma.ClaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClasePayload>
          }
          findMany: {
            args: Prisma.ClaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClasePayload>[]
          }
          create: {
            args: Prisma.ClaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClasePayload>
          }
          createMany: {
            args: Prisma.ClaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClasePayload>[]
          }
          delete: {
            args: Prisma.ClaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClasePayload>
          }
          update: {
            args: Prisma.ClaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClasePayload>
          }
          deleteMany: {
            args: Prisma.ClaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClaseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClasePayload>[]
          }
          upsert: {
            args: Prisma.ClaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClasePayload>
          }
          aggregate: {
            args: Prisma.ClaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClase>
          }
          groupBy: {
            args: Prisma.ClaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClaseCountArgs<ExtArgs>
            result: $Utils.Optional<ClaseCountAggregateOutputType> | number
          }
        }
      }
      Cuota: {
        payload: Prisma.$CuotaPayload<ExtArgs>
        fields: Prisma.CuotaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CuotaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuotaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CuotaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuotaPayload>
          }
          findFirst: {
            args: Prisma.CuotaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuotaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CuotaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuotaPayload>
          }
          findMany: {
            args: Prisma.CuotaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuotaPayload>[]
          }
          create: {
            args: Prisma.CuotaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuotaPayload>
          }
          createMany: {
            args: Prisma.CuotaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CuotaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuotaPayload>[]
          }
          delete: {
            args: Prisma.CuotaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuotaPayload>
          }
          update: {
            args: Prisma.CuotaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuotaPayload>
          }
          deleteMany: {
            args: Prisma.CuotaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CuotaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CuotaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuotaPayload>[]
          }
          upsert: {
            args: Prisma.CuotaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuotaPayload>
          }
          aggregate: {
            args: Prisma.CuotaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCuota>
          }
          groupBy: {
            args: Prisma.CuotaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CuotaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CuotaCountArgs<ExtArgs>
            result: $Utils.Optional<CuotaCountAggregateOutputType> | number
          }
        }
      }
      Comprobante: {
        payload: Prisma.$ComprobantePayload<ExtArgs>
        fields: Prisma.ComprobanteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ComprobanteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComprobantePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ComprobanteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComprobantePayload>
          }
          findFirst: {
            args: Prisma.ComprobanteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComprobantePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ComprobanteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComprobantePayload>
          }
          findMany: {
            args: Prisma.ComprobanteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComprobantePayload>[]
          }
          create: {
            args: Prisma.ComprobanteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComprobantePayload>
          }
          createMany: {
            args: Prisma.ComprobanteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ComprobanteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComprobantePayload>[]
          }
          delete: {
            args: Prisma.ComprobanteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComprobantePayload>
          }
          update: {
            args: Prisma.ComprobanteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComprobantePayload>
          }
          deleteMany: {
            args: Prisma.ComprobanteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ComprobanteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ComprobanteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComprobantePayload>[]
          }
          upsert: {
            args: Prisma.ComprobanteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComprobantePayload>
          }
          aggregate: {
            args: Prisma.ComprobanteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComprobante>
          }
          groupBy: {
            args: Prisma.ComprobanteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ComprobanteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ComprobanteCountArgs<ExtArgs>
            result: $Utils.Optional<ComprobanteCountAggregateOutputType> | number
          }
        }
      }
      Profesor: {
        payload: Prisma.$ProfesorPayload<ExtArgs>
        fields: Prisma.ProfesorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfesorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfesorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfesorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfesorPayload>
          }
          findFirst: {
            args: Prisma.ProfesorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfesorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfesorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfesorPayload>
          }
          findMany: {
            args: Prisma.ProfesorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfesorPayload>[]
          }
          create: {
            args: Prisma.ProfesorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfesorPayload>
          }
          createMany: {
            args: Prisma.ProfesorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfesorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfesorPayload>[]
          }
          delete: {
            args: Prisma.ProfesorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfesorPayload>
          }
          update: {
            args: Prisma.ProfesorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfesorPayload>
          }
          deleteMany: {
            args: Prisma.ProfesorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfesorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfesorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfesorPayload>[]
          }
          upsert: {
            args: Prisma.ProfesorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfesorPayload>
          }
          aggregate: {
            args: Prisma.ProfesorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfesor>
          }
          groupBy: {
            args: Prisma.ProfesorGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfesorGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfesorCountArgs<ExtArgs>
            result: $Utils.Optional<ProfesorCountAggregateOutputType> | number
          }
        }
      }
      ClaseSocio: {
        payload: Prisma.$ClaseSocioPayload<ExtArgs>
        fields: Prisma.ClaseSocioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClaseSocioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaseSocioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClaseSocioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaseSocioPayload>
          }
          findFirst: {
            args: Prisma.ClaseSocioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaseSocioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClaseSocioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaseSocioPayload>
          }
          findMany: {
            args: Prisma.ClaseSocioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaseSocioPayload>[]
          }
          create: {
            args: Prisma.ClaseSocioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaseSocioPayload>
          }
          createMany: {
            args: Prisma.ClaseSocioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClaseSocioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaseSocioPayload>[]
          }
          delete: {
            args: Prisma.ClaseSocioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaseSocioPayload>
          }
          update: {
            args: Prisma.ClaseSocioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaseSocioPayload>
          }
          deleteMany: {
            args: Prisma.ClaseSocioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClaseSocioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClaseSocioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaseSocioPayload>[]
          }
          upsert: {
            args: Prisma.ClaseSocioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaseSocioPayload>
          }
          aggregate: {
            args: Prisma.ClaseSocioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClaseSocio>
          }
          groupBy: {
            args: Prisma.ClaseSocioGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClaseSocioGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClaseSocioCountArgs<ExtArgs>
            result: $Utils.Optional<ClaseSocioCountAggregateOutputType> | number
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
    actividad?: ActividadOmit
    clase?: ClaseOmit
    cuota?: CuotaOmit
    comprobante?: ComprobanteOmit
    profesor?: ProfesorOmit
    claseSocio?: ClaseSocioOmit
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
    ClaseSocio: number
    Cuota: number
    entradas: number
  }

  export type SocioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ClaseSocio?: boolean | SocioCountOutputTypeCountClaseSocioArgs
    Cuota?: boolean | SocioCountOutputTypeCountCuotaArgs
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
  export type SocioCountOutputTypeCountClaseSocioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClaseSocioWhereInput
  }

  /**
   * SocioCountOutputType without action
   */
  export type SocioCountOutputTypeCountCuotaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CuotaWhereInput
  }

  /**
   * SocioCountOutputType without action
   */
  export type SocioCountOutputTypeCountEntradasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EntradaWhereInput
  }


  /**
   * Count Type ActividadCountOutputType
   */

  export type ActividadCountOutputType = {
    clases: number
    Cuota: number
  }

  export type ActividadCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clases?: boolean | ActividadCountOutputTypeCountClasesArgs
    Cuota?: boolean | ActividadCountOutputTypeCountCuotaArgs
  }

  // Custom InputTypes
  /**
   * ActividadCountOutputType without action
   */
  export type ActividadCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActividadCountOutputType
     */
    select?: ActividadCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ActividadCountOutputType without action
   */
  export type ActividadCountOutputTypeCountClasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClaseWhereInput
  }

  /**
   * ActividadCountOutputType without action
   */
  export type ActividadCountOutputTypeCountCuotaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CuotaWhereInput
  }


  /**
   * Count Type ClaseCountOutputType
   */

  export type ClaseCountOutputType = {
    ClaseSocio: number
  }

  export type ClaseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ClaseSocio?: boolean | ClaseCountOutputTypeCountClaseSocioArgs
  }

  // Custom InputTypes
  /**
   * ClaseCountOutputType without action
   */
  export type ClaseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaseCountOutputType
     */
    select?: ClaseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClaseCountOutputType without action
   */
  export type ClaseCountOutputTypeCountClaseSocioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClaseSocioWhereInput
  }


  /**
   * Count Type CuotaCountOutputType
   */

  export type CuotaCountOutputType = {
    Comprobante: number
  }

  export type CuotaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Comprobante?: boolean | CuotaCountOutputTypeCountComprobanteArgs
  }

  // Custom InputTypes
  /**
   * CuotaCountOutputType without action
   */
  export type CuotaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CuotaCountOutputType
     */
    select?: CuotaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CuotaCountOutputType without action
   */
  export type CuotaCountOutputTypeCountComprobanteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComprobanteWhereInput
  }


  /**
   * Count Type ProfesorCountOutputType
   */

  export type ProfesorCountOutputType = {
    clases: number
  }

  export type ProfesorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clases?: boolean | ProfesorCountOutputTypeCountClasesArgs
  }

  // Custom InputTypes
  /**
   * ProfesorCountOutputType without action
   */
  export type ProfesorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfesorCountOutputType
     */
    select?: ProfesorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfesorCountOutputType without action
   */
  export type ProfesorCountOutputTypeCountClasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClaseWhereInput
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
    comprobanteUrl: string | null
    formaDePago: $Enums.FormaDePago | null
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
    comprobanteUrl: string | null
    formaDePago: $Enums.FormaDePago | null
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
    comprobanteUrl: number
    formaDePago: number
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
    comprobanteUrl?: true
    formaDePago?: true
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
    comprobanteUrl?: true
    formaDePago?: true
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
    comprobanteUrl?: true
    formaDePago?: true
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
    comprobanteUrl: string | null
    formaDePago: $Enums.FormaDePago
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
    comprobanteUrl?: boolean
    formaDePago?: boolean
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
    comprobanteUrl?: boolean
    formaDePago?: boolean
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
    comprobanteUrl?: boolean
    formaDePago?: boolean
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
    comprobanteUrl?: boolean
    formaDePago?: boolean
  }

  export type EntradaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventoId" | "cantidad" | "precioUnitario" | "total" | "fechaCompra" | "socioId" | "createdAt" | "comprobanteUrl" | "formaDePago", ExtArgs["result"]["entrada"]>
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
      comprobanteUrl: string | null
      formaDePago: $Enums.FormaDePago
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
    readonly comprobanteUrl: FieldRef<"Entrada", 'String'>
    readonly formaDePago: FieldRef<"Entrada", 'FormaDePago'>
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
    ClaseSocio?: boolean | Socio$ClaseSocioArgs<ExtArgs>
    Cuota?: boolean | Socio$CuotaArgs<ExtArgs>
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
    ClaseSocio?: boolean | Socio$ClaseSocioArgs<ExtArgs>
    Cuota?: boolean | Socio$CuotaArgs<ExtArgs>
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
      ClaseSocio: Prisma.$ClaseSocioPayload<ExtArgs>[]
      Cuota: Prisma.$CuotaPayload<ExtArgs>[]
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
    ClaseSocio<T extends Socio$ClaseSocioArgs<ExtArgs> = {}>(args?: Subset<T, Socio$ClaseSocioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClaseSocioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Cuota<T extends Socio$CuotaArgs<ExtArgs> = {}>(args?: Subset<T, Socio$CuotaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CuotaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Socio.ClaseSocio
   */
  export type Socio$ClaseSocioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaseSocio
     */
    select?: ClaseSocioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClaseSocio
     */
    omit?: ClaseSocioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaseSocioInclude<ExtArgs> | null
    where?: ClaseSocioWhereInput
    orderBy?: ClaseSocioOrderByWithRelationInput | ClaseSocioOrderByWithRelationInput[]
    cursor?: ClaseSocioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClaseSocioScalarFieldEnum | ClaseSocioScalarFieldEnum[]
  }

  /**
   * Socio.Cuota
   */
  export type Socio$CuotaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuota
     */
    select?: CuotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cuota
     */
    omit?: CuotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuotaInclude<ExtArgs> | null
    where?: CuotaWhereInput
    orderBy?: CuotaOrderByWithRelationInput | CuotaOrderByWithRelationInput[]
    cursor?: CuotaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CuotaScalarFieldEnum | CuotaScalarFieldEnum[]
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
   * Model Actividad
   */

  export type AggregateActividad = {
    _count: ActividadCountAggregateOutputType | null
    _avg: ActividadAvgAggregateOutputType | null
    _sum: ActividadSumAggregateOutputType | null
    _min: ActividadMinAggregateOutputType | null
    _max: ActividadMaxAggregateOutputType | null
  }

  export type ActividadAvgAggregateOutputType = {
    id: number | null
    monto: number | null
  }

  export type ActividadSumAggregateOutputType = {
    id: number | null
    monto: number | null
  }

  export type ActividadMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    monto: number | null
    activo: boolean | null
    createdAt: Date | null
  }

  export type ActividadMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    monto: number | null
    activo: boolean | null
    createdAt: Date | null
  }

  export type ActividadCountAggregateOutputType = {
    id: number
    nombre: number
    monto: number
    activo: number
    createdAt: number
    _all: number
  }


  export type ActividadAvgAggregateInputType = {
    id?: true
    monto?: true
  }

  export type ActividadSumAggregateInputType = {
    id?: true
    monto?: true
  }

  export type ActividadMinAggregateInputType = {
    id?: true
    nombre?: true
    monto?: true
    activo?: true
    createdAt?: true
  }

  export type ActividadMaxAggregateInputType = {
    id?: true
    nombre?: true
    monto?: true
    activo?: true
    createdAt?: true
  }

  export type ActividadCountAggregateInputType = {
    id?: true
    nombre?: true
    monto?: true
    activo?: true
    createdAt?: true
    _all?: true
  }

  export type ActividadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Actividad to aggregate.
     */
    where?: ActividadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actividads to fetch.
     */
    orderBy?: ActividadOrderByWithRelationInput | ActividadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActividadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actividads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actividads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Actividads
    **/
    _count?: true | ActividadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActividadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActividadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActividadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActividadMaxAggregateInputType
  }

  export type GetActividadAggregateType<T extends ActividadAggregateArgs> = {
        [P in keyof T & keyof AggregateActividad]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActividad[P]>
      : GetScalarType<T[P], AggregateActividad[P]>
  }




  export type ActividadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActividadWhereInput
    orderBy?: ActividadOrderByWithAggregationInput | ActividadOrderByWithAggregationInput[]
    by: ActividadScalarFieldEnum[] | ActividadScalarFieldEnum
    having?: ActividadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActividadCountAggregateInputType | true
    _avg?: ActividadAvgAggregateInputType
    _sum?: ActividadSumAggregateInputType
    _min?: ActividadMinAggregateInputType
    _max?: ActividadMaxAggregateInputType
  }

  export type ActividadGroupByOutputType = {
    id: number
    nombre: string
    monto: number
    activo: boolean
    createdAt: Date
    _count: ActividadCountAggregateOutputType | null
    _avg: ActividadAvgAggregateOutputType | null
    _sum: ActividadSumAggregateOutputType | null
    _min: ActividadMinAggregateOutputType | null
    _max: ActividadMaxAggregateOutputType | null
  }

  type GetActividadGroupByPayload<T extends ActividadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActividadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActividadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActividadGroupByOutputType[P]>
            : GetScalarType<T[P], ActividadGroupByOutputType[P]>
        }
      >
    >


  export type ActividadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    monto?: boolean
    activo?: boolean
    createdAt?: boolean
    clases?: boolean | Actividad$clasesArgs<ExtArgs>
    Cuota?: boolean | Actividad$CuotaArgs<ExtArgs>
    _count?: boolean | ActividadCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["actividad"]>

  export type ActividadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    monto?: boolean
    activo?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["actividad"]>

  export type ActividadSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    monto?: boolean
    activo?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["actividad"]>

  export type ActividadSelectScalar = {
    id?: boolean
    nombre?: boolean
    monto?: boolean
    activo?: boolean
    createdAt?: boolean
  }

  export type ActividadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "monto" | "activo" | "createdAt", ExtArgs["result"]["actividad"]>
  export type ActividadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clases?: boolean | Actividad$clasesArgs<ExtArgs>
    Cuota?: boolean | Actividad$CuotaArgs<ExtArgs>
    _count?: boolean | ActividadCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ActividadIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ActividadIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ActividadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Actividad"
    objects: {
      clases: Prisma.$ClasePayload<ExtArgs>[]
      Cuota: Prisma.$CuotaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      monto: number
      activo: boolean
      createdAt: Date
    }, ExtArgs["result"]["actividad"]>
    composites: {}
  }

  type ActividadGetPayload<S extends boolean | null | undefined | ActividadDefaultArgs> = $Result.GetResult<Prisma.$ActividadPayload, S>

  type ActividadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActividadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActividadCountAggregateInputType | true
    }

  export interface ActividadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Actividad'], meta: { name: 'Actividad' } }
    /**
     * Find zero or one Actividad that matches the filter.
     * @param {ActividadFindUniqueArgs} args - Arguments to find a Actividad
     * @example
     * // Get one Actividad
     * const actividad = await prisma.actividad.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActividadFindUniqueArgs>(args: SelectSubset<T, ActividadFindUniqueArgs<ExtArgs>>): Prisma__ActividadClient<$Result.GetResult<Prisma.$ActividadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Actividad that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActividadFindUniqueOrThrowArgs} args - Arguments to find a Actividad
     * @example
     * // Get one Actividad
     * const actividad = await prisma.actividad.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActividadFindUniqueOrThrowArgs>(args: SelectSubset<T, ActividadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActividadClient<$Result.GetResult<Prisma.$ActividadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Actividad that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActividadFindFirstArgs} args - Arguments to find a Actividad
     * @example
     * // Get one Actividad
     * const actividad = await prisma.actividad.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActividadFindFirstArgs>(args?: SelectSubset<T, ActividadFindFirstArgs<ExtArgs>>): Prisma__ActividadClient<$Result.GetResult<Prisma.$ActividadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Actividad that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActividadFindFirstOrThrowArgs} args - Arguments to find a Actividad
     * @example
     * // Get one Actividad
     * const actividad = await prisma.actividad.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActividadFindFirstOrThrowArgs>(args?: SelectSubset<T, ActividadFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActividadClient<$Result.GetResult<Prisma.$ActividadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Actividads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActividadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Actividads
     * const actividads = await prisma.actividad.findMany()
     * 
     * // Get first 10 Actividads
     * const actividads = await prisma.actividad.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const actividadWithIdOnly = await prisma.actividad.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActividadFindManyArgs>(args?: SelectSubset<T, ActividadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActividadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Actividad.
     * @param {ActividadCreateArgs} args - Arguments to create a Actividad.
     * @example
     * // Create one Actividad
     * const Actividad = await prisma.actividad.create({
     *   data: {
     *     // ... data to create a Actividad
     *   }
     * })
     * 
     */
    create<T extends ActividadCreateArgs>(args: SelectSubset<T, ActividadCreateArgs<ExtArgs>>): Prisma__ActividadClient<$Result.GetResult<Prisma.$ActividadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Actividads.
     * @param {ActividadCreateManyArgs} args - Arguments to create many Actividads.
     * @example
     * // Create many Actividads
     * const actividad = await prisma.actividad.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActividadCreateManyArgs>(args?: SelectSubset<T, ActividadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Actividads and returns the data saved in the database.
     * @param {ActividadCreateManyAndReturnArgs} args - Arguments to create many Actividads.
     * @example
     * // Create many Actividads
     * const actividad = await prisma.actividad.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Actividads and only return the `id`
     * const actividadWithIdOnly = await prisma.actividad.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActividadCreateManyAndReturnArgs>(args?: SelectSubset<T, ActividadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActividadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Actividad.
     * @param {ActividadDeleteArgs} args - Arguments to delete one Actividad.
     * @example
     * // Delete one Actividad
     * const Actividad = await prisma.actividad.delete({
     *   where: {
     *     // ... filter to delete one Actividad
     *   }
     * })
     * 
     */
    delete<T extends ActividadDeleteArgs>(args: SelectSubset<T, ActividadDeleteArgs<ExtArgs>>): Prisma__ActividadClient<$Result.GetResult<Prisma.$ActividadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Actividad.
     * @param {ActividadUpdateArgs} args - Arguments to update one Actividad.
     * @example
     * // Update one Actividad
     * const actividad = await prisma.actividad.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActividadUpdateArgs>(args: SelectSubset<T, ActividadUpdateArgs<ExtArgs>>): Prisma__ActividadClient<$Result.GetResult<Prisma.$ActividadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Actividads.
     * @param {ActividadDeleteManyArgs} args - Arguments to filter Actividads to delete.
     * @example
     * // Delete a few Actividads
     * const { count } = await prisma.actividad.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActividadDeleteManyArgs>(args?: SelectSubset<T, ActividadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Actividads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActividadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Actividads
     * const actividad = await prisma.actividad.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActividadUpdateManyArgs>(args: SelectSubset<T, ActividadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Actividads and returns the data updated in the database.
     * @param {ActividadUpdateManyAndReturnArgs} args - Arguments to update many Actividads.
     * @example
     * // Update many Actividads
     * const actividad = await prisma.actividad.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Actividads and only return the `id`
     * const actividadWithIdOnly = await prisma.actividad.updateManyAndReturn({
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
    updateManyAndReturn<T extends ActividadUpdateManyAndReturnArgs>(args: SelectSubset<T, ActividadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActividadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Actividad.
     * @param {ActividadUpsertArgs} args - Arguments to update or create a Actividad.
     * @example
     * // Update or create a Actividad
     * const actividad = await prisma.actividad.upsert({
     *   create: {
     *     // ... data to create a Actividad
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Actividad we want to update
     *   }
     * })
     */
    upsert<T extends ActividadUpsertArgs>(args: SelectSubset<T, ActividadUpsertArgs<ExtArgs>>): Prisma__ActividadClient<$Result.GetResult<Prisma.$ActividadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Actividads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActividadCountArgs} args - Arguments to filter Actividads to count.
     * @example
     * // Count the number of Actividads
     * const count = await prisma.actividad.count({
     *   where: {
     *     // ... the filter for the Actividads we want to count
     *   }
     * })
    **/
    count<T extends ActividadCountArgs>(
      args?: Subset<T, ActividadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActividadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Actividad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActividadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActividadAggregateArgs>(args: Subset<T, ActividadAggregateArgs>): Prisma.PrismaPromise<GetActividadAggregateType<T>>

    /**
     * Group by Actividad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActividadGroupByArgs} args - Group by arguments.
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
      T extends ActividadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActividadGroupByArgs['orderBy'] }
        : { orderBy?: ActividadGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActividadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActividadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Actividad model
   */
  readonly fields: ActividadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Actividad.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActividadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clases<T extends Actividad$clasesArgs<ExtArgs> = {}>(args?: Subset<T, Actividad$clasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Cuota<T extends Actividad$CuotaArgs<ExtArgs> = {}>(args?: Subset<T, Actividad$CuotaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CuotaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Actividad model
   */
  interface ActividadFieldRefs {
    readonly id: FieldRef<"Actividad", 'Int'>
    readonly nombre: FieldRef<"Actividad", 'String'>
    readonly monto: FieldRef<"Actividad", 'Float'>
    readonly activo: FieldRef<"Actividad", 'Boolean'>
    readonly createdAt: FieldRef<"Actividad", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Actividad findUnique
   */
  export type ActividadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actividad
     */
    select?: ActividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actividad
     */
    omit?: ActividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActividadInclude<ExtArgs> | null
    /**
     * Filter, which Actividad to fetch.
     */
    where: ActividadWhereUniqueInput
  }

  /**
   * Actividad findUniqueOrThrow
   */
  export type ActividadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actividad
     */
    select?: ActividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actividad
     */
    omit?: ActividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActividadInclude<ExtArgs> | null
    /**
     * Filter, which Actividad to fetch.
     */
    where: ActividadWhereUniqueInput
  }

  /**
   * Actividad findFirst
   */
  export type ActividadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actividad
     */
    select?: ActividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actividad
     */
    omit?: ActividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActividadInclude<ExtArgs> | null
    /**
     * Filter, which Actividad to fetch.
     */
    where?: ActividadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actividads to fetch.
     */
    orderBy?: ActividadOrderByWithRelationInput | ActividadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Actividads.
     */
    cursor?: ActividadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actividads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actividads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Actividads.
     */
    distinct?: ActividadScalarFieldEnum | ActividadScalarFieldEnum[]
  }

  /**
   * Actividad findFirstOrThrow
   */
  export type ActividadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actividad
     */
    select?: ActividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actividad
     */
    omit?: ActividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActividadInclude<ExtArgs> | null
    /**
     * Filter, which Actividad to fetch.
     */
    where?: ActividadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actividads to fetch.
     */
    orderBy?: ActividadOrderByWithRelationInput | ActividadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Actividads.
     */
    cursor?: ActividadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actividads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actividads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Actividads.
     */
    distinct?: ActividadScalarFieldEnum | ActividadScalarFieldEnum[]
  }

  /**
   * Actividad findMany
   */
  export type ActividadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actividad
     */
    select?: ActividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actividad
     */
    omit?: ActividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActividadInclude<ExtArgs> | null
    /**
     * Filter, which Actividads to fetch.
     */
    where?: ActividadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actividads to fetch.
     */
    orderBy?: ActividadOrderByWithRelationInput | ActividadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Actividads.
     */
    cursor?: ActividadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actividads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actividads.
     */
    skip?: number
    distinct?: ActividadScalarFieldEnum | ActividadScalarFieldEnum[]
  }

  /**
   * Actividad create
   */
  export type ActividadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actividad
     */
    select?: ActividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actividad
     */
    omit?: ActividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActividadInclude<ExtArgs> | null
    /**
     * The data needed to create a Actividad.
     */
    data: XOR<ActividadCreateInput, ActividadUncheckedCreateInput>
  }

  /**
   * Actividad createMany
   */
  export type ActividadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Actividads.
     */
    data: ActividadCreateManyInput | ActividadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Actividad createManyAndReturn
   */
  export type ActividadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actividad
     */
    select?: ActividadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Actividad
     */
    omit?: ActividadOmit<ExtArgs> | null
    /**
     * The data used to create many Actividads.
     */
    data: ActividadCreateManyInput | ActividadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Actividad update
   */
  export type ActividadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actividad
     */
    select?: ActividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actividad
     */
    omit?: ActividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActividadInclude<ExtArgs> | null
    /**
     * The data needed to update a Actividad.
     */
    data: XOR<ActividadUpdateInput, ActividadUncheckedUpdateInput>
    /**
     * Choose, which Actividad to update.
     */
    where: ActividadWhereUniqueInput
  }

  /**
   * Actividad updateMany
   */
  export type ActividadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Actividads.
     */
    data: XOR<ActividadUpdateManyMutationInput, ActividadUncheckedUpdateManyInput>
    /**
     * Filter which Actividads to update
     */
    where?: ActividadWhereInput
    /**
     * Limit how many Actividads to update.
     */
    limit?: number
  }

  /**
   * Actividad updateManyAndReturn
   */
  export type ActividadUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actividad
     */
    select?: ActividadSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Actividad
     */
    omit?: ActividadOmit<ExtArgs> | null
    /**
     * The data used to update Actividads.
     */
    data: XOR<ActividadUpdateManyMutationInput, ActividadUncheckedUpdateManyInput>
    /**
     * Filter which Actividads to update
     */
    where?: ActividadWhereInput
    /**
     * Limit how many Actividads to update.
     */
    limit?: number
  }

  /**
   * Actividad upsert
   */
  export type ActividadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actividad
     */
    select?: ActividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actividad
     */
    omit?: ActividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActividadInclude<ExtArgs> | null
    /**
     * The filter to search for the Actividad to update in case it exists.
     */
    where: ActividadWhereUniqueInput
    /**
     * In case the Actividad found by the `where` argument doesn't exist, create a new Actividad with this data.
     */
    create: XOR<ActividadCreateInput, ActividadUncheckedCreateInput>
    /**
     * In case the Actividad was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActividadUpdateInput, ActividadUncheckedUpdateInput>
  }

  /**
   * Actividad delete
   */
  export type ActividadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actividad
     */
    select?: ActividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actividad
     */
    omit?: ActividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActividadInclude<ExtArgs> | null
    /**
     * Filter which Actividad to delete.
     */
    where: ActividadWhereUniqueInput
  }

  /**
   * Actividad deleteMany
   */
  export type ActividadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Actividads to delete
     */
    where?: ActividadWhereInput
    /**
     * Limit how many Actividads to delete.
     */
    limit?: number
  }

  /**
   * Actividad.clases
   */
  export type Actividad$clasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clase
     */
    select?: ClaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clase
     */
    omit?: ClaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaseInclude<ExtArgs> | null
    where?: ClaseWhereInput
    orderBy?: ClaseOrderByWithRelationInput | ClaseOrderByWithRelationInput[]
    cursor?: ClaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClaseScalarFieldEnum | ClaseScalarFieldEnum[]
  }

  /**
   * Actividad.Cuota
   */
  export type Actividad$CuotaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuota
     */
    select?: CuotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cuota
     */
    omit?: CuotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuotaInclude<ExtArgs> | null
    where?: CuotaWhereInput
    orderBy?: CuotaOrderByWithRelationInput | CuotaOrderByWithRelationInput[]
    cursor?: CuotaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CuotaScalarFieldEnum | CuotaScalarFieldEnum[]
  }

  /**
   * Actividad without action
   */
  export type ActividadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actividad
     */
    select?: ActividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actividad
     */
    omit?: ActividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActividadInclude<ExtArgs> | null
  }


  /**
   * Model Clase
   */

  export type AggregateClase = {
    _count: ClaseCountAggregateOutputType | null
    _avg: ClaseAvgAggregateOutputType | null
    _sum: ClaseSumAggregateOutputType | null
    _min: ClaseMinAggregateOutputType | null
    _max: ClaseMaxAggregateOutputType | null
  }

  export type ClaseAvgAggregateOutputType = {
    id: number | null
    actividadId: number | null
    profesorId: number | null
  }

  export type ClaseSumAggregateOutputType = {
    id: number | null
    actividadId: number | null
    profesorId: number | null
  }

  export type ClaseMinAggregateOutputType = {
    id: number | null
    diaSemana: $Enums.DiaSemana | null
    horaInicio: string | null
    horaFin: string | null
    activo: boolean | null
    actividadId: number | null
    profesorId: number | null
    createdAt: Date | null
  }

  export type ClaseMaxAggregateOutputType = {
    id: number | null
    diaSemana: $Enums.DiaSemana | null
    horaInicio: string | null
    horaFin: string | null
    activo: boolean | null
    actividadId: number | null
    profesorId: number | null
    createdAt: Date | null
  }

  export type ClaseCountAggregateOutputType = {
    id: number
    diaSemana: number
    horaInicio: number
    horaFin: number
    activo: number
    actividadId: number
    profesorId: number
    createdAt: number
    _all: number
  }


  export type ClaseAvgAggregateInputType = {
    id?: true
    actividadId?: true
    profesorId?: true
  }

  export type ClaseSumAggregateInputType = {
    id?: true
    actividadId?: true
    profesorId?: true
  }

  export type ClaseMinAggregateInputType = {
    id?: true
    diaSemana?: true
    horaInicio?: true
    horaFin?: true
    activo?: true
    actividadId?: true
    profesorId?: true
    createdAt?: true
  }

  export type ClaseMaxAggregateInputType = {
    id?: true
    diaSemana?: true
    horaInicio?: true
    horaFin?: true
    activo?: true
    actividadId?: true
    profesorId?: true
    createdAt?: true
  }

  export type ClaseCountAggregateInputType = {
    id?: true
    diaSemana?: true
    horaInicio?: true
    horaFin?: true
    activo?: true
    actividadId?: true
    profesorId?: true
    createdAt?: true
    _all?: true
  }

  export type ClaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clase to aggregate.
     */
    where?: ClaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clases to fetch.
     */
    orderBy?: ClaseOrderByWithRelationInput | ClaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clases
    **/
    _count?: true | ClaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClaseMaxAggregateInputType
  }

  export type GetClaseAggregateType<T extends ClaseAggregateArgs> = {
        [P in keyof T & keyof AggregateClase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClase[P]>
      : GetScalarType<T[P], AggregateClase[P]>
  }




  export type ClaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClaseWhereInput
    orderBy?: ClaseOrderByWithAggregationInput | ClaseOrderByWithAggregationInput[]
    by: ClaseScalarFieldEnum[] | ClaseScalarFieldEnum
    having?: ClaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClaseCountAggregateInputType | true
    _avg?: ClaseAvgAggregateInputType
    _sum?: ClaseSumAggregateInputType
    _min?: ClaseMinAggregateInputType
    _max?: ClaseMaxAggregateInputType
  }

  export type ClaseGroupByOutputType = {
    id: number
    diaSemana: $Enums.DiaSemana
    horaInicio: string
    horaFin: string
    activo: boolean
    actividadId: number
    profesorId: number | null
    createdAt: Date
    _count: ClaseCountAggregateOutputType | null
    _avg: ClaseAvgAggregateOutputType | null
    _sum: ClaseSumAggregateOutputType | null
    _min: ClaseMinAggregateOutputType | null
    _max: ClaseMaxAggregateOutputType | null
  }

  type GetClaseGroupByPayload<T extends ClaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClaseGroupByOutputType[P]>
            : GetScalarType<T[P], ClaseGroupByOutputType[P]>
        }
      >
    >


  export type ClaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    diaSemana?: boolean
    horaInicio?: boolean
    horaFin?: boolean
    activo?: boolean
    actividadId?: boolean
    profesorId?: boolean
    createdAt?: boolean
    actividad?: boolean | ActividadDefaultArgs<ExtArgs>
    profesor?: boolean | Clase$profesorArgs<ExtArgs>
    ClaseSocio?: boolean | Clase$ClaseSocioArgs<ExtArgs>
    _count?: boolean | ClaseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clase"]>

  export type ClaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    diaSemana?: boolean
    horaInicio?: boolean
    horaFin?: boolean
    activo?: boolean
    actividadId?: boolean
    profesorId?: boolean
    createdAt?: boolean
    actividad?: boolean | ActividadDefaultArgs<ExtArgs>
    profesor?: boolean | Clase$profesorArgs<ExtArgs>
  }, ExtArgs["result"]["clase"]>

  export type ClaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    diaSemana?: boolean
    horaInicio?: boolean
    horaFin?: boolean
    activo?: boolean
    actividadId?: boolean
    profesorId?: boolean
    createdAt?: boolean
    actividad?: boolean | ActividadDefaultArgs<ExtArgs>
    profesor?: boolean | Clase$profesorArgs<ExtArgs>
  }, ExtArgs["result"]["clase"]>

  export type ClaseSelectScalar = {
    id?: boolean
    diaSemana?: boolean
    horaInicio?: boolean
    horaFin?: boolean
    activo?: boolean
    actividadId?: boolean
    profesorId?: boolean
    createdAt?: boolean
  }

  export type ClaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "diaSemana" | "horaInicio" | "horaFin" | "activo" | "actividadId" | "profesorId" | "createdAt", ExtArgs["result"]["clase"]>
  export type ClaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actividad?: boolean | ActividadDefaultArgs<ExtArgs>
    profesor?: boolean | Clase$profesorArgs<ExtArgs>
    ClaseSocio?: boolean | Clase$ClaseSocioArgs<ExtArgs>
    _count?: boolean | ClaseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actividad?: boolean | ActividadDefaultArgs<ExtArgs>
    profesor?: boolean | Clase$profesorArgs<ExtArgs>
  }
  export type ClaseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actividad?: boolean | ActividadDefaultArgs<ExtArgs>
    profesor?: boolean | Clase$profesorArgs<ExtArgs>
  }

  export type $ClasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Clase"
    objects: {
      actividad: Prisma.$ActividadPayload<ExtArgs>
      profesor: Prisma.$ProfesorPayload<ExtArgs> | null
      ClaseSocio: Prisma.$ClaseSocioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      diaSemana: $Enums.DiaSemana
      horaInicio: string
      horaFin: string
      activo: boolean
      actividadId: number
      profesorId: number | null
      createdAt: Date
    }, ExtArgs["result"]["clase"]>
    composites: {}
  }

  type ClaseGetPayload<S extends boolean | null | undefined | ClaseDefaultArgs> = $Result.GetResult<Prisma.$ClasePayload, S>

  type ClaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClaseCountAggregateInputType | true
    }

  export interface ClaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Clase'], meta: { name: 'Clase' } }
    /**
     * Find zero or one Clase that matches the filter.
     * @param {ClaseFindUniqueArgs} args - Arguments to find a Clase
     * @example
     * // Get one Clase
     * const clase = await prisma.clase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClaseFindUniqueArgs>(args: SelectSubset<T, ClaseFindUniqueArgs<ExtArgs>>): Prisma__ClaseClient<$Result.GetResult<Prisma.$ClasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Clase that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClaseFindUniqueOrThrowArgs} args - Arguments to find a Clase
     * @example
     * // Get one Clase
     * const clase = await prisma.clase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClaseFindUniqueOrThrowArgs>(args: SelectSubset<T, ClaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClaseClient<$Result.GetResult<Prisma.$ClasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaseFindFirstArgs} args - Arguments to find a Clase
     * @example
     * // Get one Clase
     * const clase = await prisma.clase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClaseFindFirstArgs>(args?: SelectSubset<T, ClaseFindFirstArgs<ExtArgs>>): Prisma__ClaseClient<$Result.GetResult<Prisma.$ClasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaseFindFirstOrThrowArgs} args - Arguments to find a Clase
     * @example
     * // Get one Clase
     * const clase = await prisma.clase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClaseFindFirstOrThrowArgs>(args?: SelectSubset<T, ClaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClaseClient<$Result.GetResult<Prisma.$ClasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clases
     * const clases = await prisma.clase.findMany()
     * 
     * // Get first 10 Clases
     * const clases = await prisma.clase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const claseWithIdOnly = await prisma.clase.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClaseFindManyArgs>(args?: SelectSubset<T, ClaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Clase.
     * @param {ClaseCreateArgs} args - Arguments to create a Clase.
     * @example
     * // Create one Clase
     * const Clase = await prisma.clase.create({
     *   data: {
     *     // ... data to create a Clase
     *   }
     * })
     * 
     */
    create<T extends ClaseCreateArgs>(args: SelectSubset<T, ClaseCreateArgs<ExtArgs>>): Prisma__ClaseClient<$Result.GetResult<Prisma.$ClasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clases.
     * @param {ClaseCreateManyArgs} args - Arguments to create many Clases.
     * @example
     * // Create many Clases
     * const clase = await prisma.clase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClaseCreateManyArgs>(args?: SelectSubset<T, ClaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clases and returns the data saved in the database.
     * @param {ClaseCreateManyAndReturnArgs} args - Arguments to create many Clases.
     * @example
     * // Create many Clases
     * const clase = await prisma.clase.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clases and only return the `id`
     * const claseWithIdOnly = await prisma.clase.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClaseCreateManyAndReturnArgs>(args?: SelectSubset<T, ClaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Clase.
     * @param {ClaseDeleteArgs} args - Arguments to delete one Clase.
     * @example
     * // Delete one Clase
     * const Clase = await prisma.clase.delete({
     *   where: {
     *     // ... filter to delete one Clase
     *   }
     * })
     * 
     */
    delete<T extends ClaseDeleteArgs>(args: SelectSubset<T, ClaseDeleteArgs<ExtArgs>>): Prisma__ClaseClient<$Result.GetResult<Prisma.$ClasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Clase.
     * @param {ClaseUpdateArgs} args - Arguments to update one Clase.
     * @example
     * // Update one Clase
     * const clase = await prisma.clase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClaseUpdateArgs>(args: SelectSubset<T, ClaseUpdateArgs<ExtArgs>>): Prisma__ClaseClient<$Result.GetResult<Prisma.$ClasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clases.
     * @param {ClaseDeleteManyArgs} args - Arguments to filter Clases to delete.
     * @example
     * // Delete a few Clases
     * const { count } = await prisma.clase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClaseDeleteManyArgs>(args?: SelectSubset<T, ClaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clases
     * const clase = await prisma.clase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClaseUpdateManyArgs>(args: SelectSubset<T, ClaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clases and returns the data updated in the database.
     * @param {ClaseUpdateManyAndReturnArgs} args - Arguments to update many Clases.
     * @example
     * // Update many Clases
     * const clase = await prisma.clase.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clases and only return the `id`
     * const claseWithIdOnly = await prisma.clase.updateManyAndReturn({
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
    updateManyAndReturn<T extends ClaseUpdateManyAndReturnArgs>(args: SelectSubset<T, ClaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Clase.
     * @param {ClaseUpsertArgs} args - Arguments to update or create a Clase.
     * @example
     * // Update or create a Clase
     * const clase = await prisma.clase.upsert({
     *   create: {
     *     // ... data to create a Clase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Clase we want to update
     *   }
     * })
     */
    upsert<T extends ClaseUpsertArgs>(args: SelectSubset<T, ClaseUpsertArgs<ExtArgs>>): Prisma__ClaseClient<$Result.GetResult<Prisma.$ClasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaseCountArgs} args - Arguments to filter Clases to count.
     * @example
     * // Count the number of Clases
     * const count = await prisma.clase.count({
     *   where: {
     *     // ... the filter for the Clases we want to count
     *   }
     * })
    **/
    count<T extends ClaseCountArgs>(
      args?: Subset<T, ClaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Clase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClaseAggregateArgs>(args: Subset<T, ClaseAggregateArgs>): Prisma.PrismaPromise<GetClaseAggregateType<T>>

    /**
     * Group by Clase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaseGroupByArgs} args - Group by arguments.
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
      T extends ClaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClaseGroupByArgs['orderBy'] }
        : { orderBy?: ClaseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Clase model
   */
  readonly fields: ClaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Clase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    actividad<T extends ActividadDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ActividadDefaultArgs<ExtArgs>>): Prisma__ActividadClient<$Result.GetResult<Prisma.$ActividadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    profesor<T extends Clase$profesorArgs<ExtArgs> = {}>(args?: Subset<T, Clase$profesorArgs<ExtArgs>>): Prisma__ProfesorClient<$Result.GetResult<Prisma.$ProfesorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    ClaseSocio<T extends Clase$ClaseSocioArgs<ExtArgs> = {}>(args?: Subset<T, Clase$ClaseSocioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClaseSocioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Clase model
   */
  interface ClaseFieldRefs {
    readonly id: FieldRef<"Clase", 'Int'>
    readonly diaSemana: FieldRef<"Clase", 'DiaSemana'>
    readonly horaInicio: FieldRef<"Clase", 'String'>
    readonly horaFin: FieldRef<"Clase", 'String'>
    readonly activo: FieldRef<"Clase", 'Boolean'>
    readonly actividadId: FieldRef<"Clase", 'Int'>
    readonly profesorId: FieldRef<"Clase", 'Int'>
    readonly createdAt: FieldRef<"Clase", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Clase findUnique
   */
  export type ClaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clase
     */
    select?: ClaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clase
     */
    omit?: ClaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaseInclude<ExtArgs> | null
    /**
     * Filter, which Clase to fetch.
     */
    where: ClaseWhereUniqueInput
  }

  /**
   * Clase findUniqueOrThrow
   */
  export type ClaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clase
     */
    select?: ClaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clase
     */
    omit?: ClaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaseInclude<ExtArgs> | null
    /**
     * Filter, which Clase to fetch.
     */
    where: ClaseWhereUniqueInput
  }

  /**
   * Clase findFirst
   */
  export type ClaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clase
     */
    select?: ClaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clase
     */
    omit?: ClaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaseInclude<ExtArgs> | null
    /**
     * Filter, which Clase to fetch.
     */
    where?: ClaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clases to fetch.
     */
    orderBy?: ClaseOrderByWithRelationInput | ClaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clases.
     */
    cursor?: ClaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clases.
     */
    distinct?: ClaseScalarFieldEnum | ClaseScalarFieldEnum[]
  }

  /**
   * Clase findFirstOrThrow
   */
  export type ClaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clase
     */
    select?: ClaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clase
     */
    omit?: ClaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaseInclude<ExtArgs> | null
    /**
     * Filter, which Clase to fetch.
     */
    where?: ClaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clases to fetch.
     */
    orderBy?: ClaseOrderByWithRelationInput | ClaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clases.
     */
    cursor?: ClaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clases.
     */
    distinct?: ClaseScalarFieldEnum | ClaseScalarFieldEnum[]
  }

  /**
   * Clase findMany
   */
  export type ClaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clase
     */
    select?: ClaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clase
     */
    omit?: ClaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaseInclude<ExtArgs> | null
    /**
     * Filter, which Clases to fetch.
     */
    where?: ClaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clases to fetch.
     */
    orderBy?: ClaseOrderByWithRelationInput | ClaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clases.
     */
    cursor?: ClaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clases.
     */
    skip?: number
    distinct?: ClaseScalarFieldEnum | ClaseScalarFieldEnum[]
  }

  /**
   * Clase create
   */
  export type ClaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clase
     */
    select?: ClaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clase
     */
    omit?: ClaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaseInclude<ExtArgs> | null
    /**
     * The data needed to create a Clase.
     */
    data: XOR<ClaseCreateInput, ClaseUncheckedCreateInput>
  }

  /**
   * Clase createMany
   */
  export type ClaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clases.
     */
    data: ClaseCreateManyInput | ClaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Clase createManyAndReturn
   */
  export type ClaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clase
     */
    select?: ClaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Clase
     */
    omit?: ClaseOmit<ExtArgs> | null
    /**
     * The data used to create many Clases.
     */
    data: ClaseCreateManyInput | ClaseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Clase update
   */
  export type ClaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clase
     */
    select?: ClaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clase
     */
    omit?: ClaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaseInclude<ExtArgs> | null
    /**
     * The data needed to update a Clase.
     */
    data: XOR<ClaseUpdateInput, ClaseUncheckedUpdateInput>
    /**
     * Choose, which Clase to update.
     */
    where: ClaseWhereUniqueInput
  }

  /**
   * Clase updateMany
   */
  export type ClaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clases.
     */
    data: XOR<ClaseUpdateManyMutationInput, ClaseUncheckedUpdateManyInput>
    /**
     * Filter which Clases to update
     */
    where?: ClaseWhereInput
    /**
     * Limit how many Clases to update.
     */
    limit?: number
  }

  /**
   * Clase updateManyAndReturn
   */
  export type ClaseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clase
     */
    select?: ClaseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Clase
     */
    omit?: ClaseOmit<ExtArgs> | null
    /**
     * The data used to update Clases.
     */
    data: XOR<ClaseUpdateManyMutationInput, ClaseUncheckedUpdateManyInput>
    /**
     * Filter which Clases to update
     */
    where?: ClaseWhereInput
    /**
     * Limit how many Clases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Clase upsert
   */
  export type ClaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clase
     */
    select?: ClaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clase
     */
    omit?: ClaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaseInclude<ExtArgs> | null
    /**
     * The filter to search for the Clase to update in case it exists.
     */
    where: ClaseWhereUniqueInput
    /**
     * In case the Clase found by the `where` argument doesn't exist, create a new Clase with this data.
     */
    create: XOR<ClaseCreateInput, ClaseUncheckedCreateInput>
    /**
     * In case the Clase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClaseUpdateInput, ClaseUncheckedUpdateInput>
  }

  /**
   * Clase delete
   */
  export type ClaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clase
     */
    select?: ClaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clase
     */
    omit?: ClaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaseInclude<ExtArgs> | null
    /**
     * Filter which Clase to delete.
     */
    where: ClaseWhereUniqueInput
  }

  /**
   * Clase deleteMany
   */
  export type ClaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clases to delete
     */
    where?: ClaseWhereInput
    /**
     * Limit how many Clases to delete.
     */
    limit?: number
  }

  /**
   * Clase.profesor
   */
  export type Clase$profesorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesor
     */
    select?: ProfesorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profesor
     */
    omit?: ProfesorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesorInclude<ExtArgs> | null
    where?: ProfesorWhereInput
  }

  /**
   * Clase.ClaseSocio
   */
  export type Clase$ClaseSocioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaseSocio
     */
    select?: ClaseSocioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClaseSocio
     */
    omit?: ClaseSocioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaseSocioInclude<ExtArgs> | null
    where?: ClaseSocioWhereInput
    orderBy?: ClaseSocioOrderByWithRelationInput | ClaseSocioOrderByWithRelationInput[]
    cursor?: ClaseSocioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClaseSocioScalarFieldEnum | ClaseSocioScalarFieldEnum[]
  }

  /**
   * Clase without action
   */
  export type ClaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clase
     */
    select?: ClaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clase
     */
    omit?: ClaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaseInclude<ExtArgs> | null
  }


  /**
   * Model Cuota
   */

  export type AggregateCuota = {
    _count: CuotaCountAggregateOutputType | null
    _avg: CuotaAvgAggregateOutputType | null
    _sum: CuotaSumAggregateOutputType | null
    _min: CuotaMinAggregateOutputType | null
    _max: CuotaMaxAggregateOutputType | null
  }

  export type CuotaAvgAggregateOutputType = {
    id: number | null
    monto: Decimal | null
    socio_id: number | null
    actividad_id: number | null
  }

  export type CuotaSumAggregateOutputType = {
    id: number | null
    monto: Decimal | null
    socio_id: number | null
    actividad_id: number | null
  }

  export type CuotaMinAggregateOutputType = {
    id: number | null
    fecha_pago: Date | null
    metodo_pago: $Enums.forma_de_pago | null
    monto: Decimal | null
    estado: $Enums.estado_cuota | null
    created_at: Date | null
    socio_id: number | null
    actividad_id: number | null
    mes: $Enums.Mes | null
  }

  export type CuotaMaxAggregateOutputType = {
    id: number | null
    fecha_pago: Date | null
    metodo_pago: $Enums.forma_de_pago | null
    monto: Decimal | null
    estado: $Enums.estado_cuota | null
    created_at: Date | null
    socio_id: number | null
    actividad_id: number | null
    mes: $Enums.Mes | null
  }

  export type CuotaCountAggregateOutputType = {
    id: number
    fecha_pago: number
    metodo_pago: number
    monto: number
    estado: number
    created_at: number
    socio_id: number
    actividad_id: number
    mes: number
    _all: number
  }


  export type CuotaAvgAggregateInputType = {
    id?: true
    monto?: true
    socio_id?: true
    actividad_id?: true
  }

  export type CuotaSumAggregateInputType = {
    id?: true
    monto?: true
    socio_id?: true
    actividad_id?: true
  }

  export type CuotaMinAggregateInputType = {
    id?: true
    fecha_pago?: true
    metodo_pago?: true
    monto?: true
    estado?: true
    created_at?: true
    socio_id?: true
    actividad_id?: true
    mes?: true
  }

  export type CuotaMaxAggregateInputType = {
    id?: true
    fecha_pago?: true
    metodo_pago?: true
    monto?: true
    estado?: true
    created_at?: true
    socio_id?: true
    actividad_id?: true
    mes?: true
  }

  export type CuotaCountAggregateInputType = {
    id?: true
    fecha_pago?: true
    metodo_pago?: true
    monto?: true
    estado?: true
    created_at?: true
    socio_id?: true
    actividad_id?: true
    mes?: true
    _all?: true
  }

  export type CuotaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cuota to aggregate.
     */
    where?: CuotaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cuotas to fetch.
     */
    orderBy?: CuotaOrderByWithRelationInput | CuotaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CuotaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cuotas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cuotas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cuotas
    **/
    _count?: true | CuotaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CuotaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CuotaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CuotaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CuotaMaxAggregateInputType
  }

  export type GetCuotaAggregateType<T extends CuotaAggregateArgs> = {
        [P in keyof T & keyof AggregateCuota]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCuota[P]>
      : GetScalarType<T[P], AggregateCuota[P]>
  }




  export type CuotaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CuotaWhereInput
    orderBy?: CuotaOrderByWithAggregationInput | CuotaOrderByWithAggregationInput[]
    by: CuotaScalarFieldEnum[] | CuotaScalarFieldEnum
    having?: CuotaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CuotaCountAggregateInputType | true
    _avg?: CuotaAvgAggregateInputType
    _sum?: CuotaSumAggregateInputType
    _min?: CuotaMinAggregateInputType
    _max?: CuotaMaxAggregateInputType
  }

  export type CuotaGroupByOutputType = {
    id: number
    fecha_pago: Date | null
    metodo_pago: $Enums.forma_de_pago
    monto: Decimal
    estado: $Enums.estado_cuota
    created_at: Date
    socio_id: number
    actividad_id: number
    mes: $Enums.Mes | null
    _count: CuotaCountAggregateOutputType | null
    _avg: CuotaAvgAggregateOutputType | null
    _sum: CuotaSumAggregateOutputType | null
    _min: CuotaMinAggregateOutputType | null
    _max: CuotaMaxAggregateOutputType | null
  }

  type GetCuotaGroupByPayload<T extends CuotaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CuotaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CuotaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CuotaGroupByOutputType[P]>
            : GetScalarType<T[P], CuotaGroupByOutputType[P]>
        }
      >
    >


  export type CuotaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha_pago?: boolean
    metodo_pago?: boolean
    monto?: boolean
    estado?: boolean
    created_at?: boolean
    socio_id?: boolean
    actividad_id?: boolean
    mes?: boolean
    Comprobante?: boolean | Cuota$ComprobanteArgs<ExtArgs>
    Actividad?: boolean | ActividadDefaultArgs<ExtArgs>
    Socio?: boolean | SocioDefaultArgs<ExtArgs>
    _count?: boolean | CuotaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cuota"]>

  export type CuotaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha_pago?: boolean
    metodo_pago?: boolean
    monto?: boolean
    estado?: boolean
    created_at?: boolean
    socio_id?: boolean
    actividad_id?: boolean
    mes?: boolean
    Actividad?: boolean | ActividadDefaultArgs<ExtArgs>
    Socio?: boolean | SocioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cuota"]>

  export type CuotaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha_pago?: boolean
    metodo_pago?: boolean
    monto?: boolean
    estado?: boolean
    created_at?: boolean
    socio_id?: boolean
    actividad_id?: boolean
    mes?: boolean
    Actividad?: boolean | ActividadDefaultArgs<ExtArgs>
    Socio?: boolean | SocioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cuota"]>

  export type CuotaSelectScalar = {
    id?: boolean
    fecha_pago?: boolean
    metodo_pago?: boolean
    monto?: boolean
    estado?: boolean
    created_at?: boolean
    socio_id?: boolean
    actividad_id?: boolean
    mes?: boolean
  }

  export type CuotaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fecha_pago" | "metodo_pago" | "monto" | "estado" | "created_at" | "socio_id" | "actividad_id" | "mes", ExtArgs["result"]["cuota"]>
  export type CuotaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Comprobante?: boolean | Cuota$ComprobanteArgs<ExtArgs>
    Actividad?: boolean | ActividadDefaultArgs<ExtArgs>
    Socio?: boolean | SocioDefaultArgs<ExtArgs>
    _count?: boolean | CuotaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CuotaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Actividad?: boolean | ActividadDefaultArgs<ExtArgs>
    Socio?: boolean | SocioDefaultArgs<ExtArgs>
  }
  export type CuotaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Actividad?: boolean | ActividadDefaultArgs<ExtArgs>
    Socio?: boolean | SocioDefaultArgs<ExtArgs>
  }

  export type $CuotaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cuota"
    objects: {
      Comprobante: Prisma.$ComprobantePayload<ExtArgs>[]
      Actividad: Prisma.$ActividadPayload<ExtArgs>
      Socio: Prisma.$SocioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fecha_pago: Date | null
      metodo_pago: $Enums.forma_de_pago
      monto: Prisma.Decimal
      estado: $Enums.estado_cuota
      created_at: Date
      socio_id: number
      actividad_id: number
      mes: $Enums.Mes | null
    }, ExtArgs["result"]["cuota"]>
    composites: {}
  }

  type CuotaGetPayload<S extends boolean | null | undefined | CuotaDefaultArgs> = $Result.GetResult<Prisma.$CuotaPayload, S>

  type CuotaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CuotaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CuotaCountAggregateInputType | true
    }

  export interface CuotaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cuota'], meta: { name: 'Cuota' } }
    /**
     * Find zero or one Cuota that matches the filter.
     * @param {CuotaFindUniqueArgs} args - Arguments to find a Cuota
     * @example
     * // Get one Cuota
     * const cuota = await prisma.cuota.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CuotaFindUniqueArgs>(args: SelectSubset<T, CuotaFindUniqueArgs<ExtArgs>>): Prisma__CuotaClient<$Result.GetResult<Prisma.$CuotaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cuota that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CuotaFindUniqueOrThrowArgs} args - Arguments to find a Cuota
     * @example
     * // Get one Cuota
     * const cuota = await prisma.cuota.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CuotaFindUniqueOrThrowArgs>(args: SelectSubset<T, CuotaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CuotaClient<$Result.GetResult<Prisma.$CuotaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cuota that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuotaFindFirstArgs} args - Arguments to find a Cuota
     * @example
     * // Get one Cuota
     * const cuota = await prisma.cuota.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CuotaFindFirstArgs>(args?: SelectSubset<T, CuotaFindFirstArgs<ExtArgs>>): Prisma__CuotaClient<$Result.GetResult<Prisma.$CuotaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cuota that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuotaFindFirstOrThrowArgs} args - Arguments to find a Cuota
     * @example
     * // Get one Cuota
     * const cuota = await prisma.cuota.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CuotaFindFirstOrThrowArgs>(args?: SelectSubset<T, CuotaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CuotaClient<$Result.GetResult<Prisma.$CuotaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cuotas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuotaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cuotas
     * const cuotas = await prisma.cuota.findMany()
     * 
     * // Get first 10 Cuotas
     * const cuotas = await prisma.cuota.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cuotaWithIdOnly = await prisma.cuota.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CuotaFindManyArgs>(args?: SelectSubset<T, CuotaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CuotaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cuota.
     * @param {CuotaCreateArgs} args - Arguments to create a Cuota.
     * @example
     * // Create one Cuota
     * const Cuota = await prisma.cuota.create({
     *   data: {
     *     // ... data to create a Cuota
     *   }
     * })
     * 
     */
    create<T extends CuotaCreateArgs>(args: SelectSubset<T, CuotaCreateArgs<ExtArgs>>): Prisma__CuotaClient<$Result.GetResult<Prisma.$CuotaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cuotas.
     * @param {CuotaCreateManyArgs} args - Arguments to create many Cuotas.
     * @example
     * // Create many Cuotas
     * const cuota = await prisma.cuota.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CuotaCreateManyArgs>(args?: SelectSubset<T, CuotaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cuotas and returns the data saved in the database.
     * @param {CuotaCreateManyAndReturnArgs} args - Arguments to create many Cuotas.
     * @example
     * // Create many Cuotas
     * const cuota = await prisma.cuota.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cuotas and only return the `id`
     * const cuotaWithIdOnly = await prisma.cuota.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CuotaCreateManyAndReturnArgs>(args?: SelectSubset<T, CuotaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CuotaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cuota.
     * @param {CuotaDeleteArgs} args - Arguments to delete one Cuota.
     * @example
     * // Delete one Cuota
     * const Cuota = await prisma.cuota.delete({
     *   where: {
     *     // ... filter to delete one Cuota
     *   }
     * })
     * 
     */
    delete<T extends CuotaDeleteArgs>(args: SelectSubset<T, CuotaDeleteArgs<ExtArgs>>): Prisma__CuotaClient<$Result.GetResult<Prisma.$CuotaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cuota.
     * @param {CuotaUpdateArgs} args - Arguments to update one Cuota.
     * @example
     * // Update one Cuota
     * const cuota = await prisma.cuota.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CuotaUpdateArgs>(args: SelectSubset<T, CuotaUpdateArgs<ExtArgs>>): Prisma__CuotaClient<$Result.GetResult<Prisma.$CuotaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cuotas.
     * @param {CuotaDeleteManyArgs} args - Arguments to filter Cuotas to delete.
     * @example
     * // Delete a few Cuotas
     * const { count } = await prisma.cuota.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CuotaDeleteManyArgs>(args?: SelectSubset<T, CuotaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cuotas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuotaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cuotas
     * const cuota = await prisma.cuota.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CuotaUpdateManyArgs>(args: SelectSubset<T, CuotaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cuotas and returns the data updated in the database.
     * @param {CuotaUpdateManyAndReturnArgs} args - Arguments to update many Cuotas.
     * @example
     * // Update many Cuotas
     * const cuota = await prisma.cuota.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cuotas and only return the `id`
     * const cuotaWithIdOnly = await prisma.cuota.updateManyAndReturn({
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
    updateManyAndReturn<T extends CuotaUpdateManyAndReturnArgs>(args: SelectSubset<T, CuotaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CuotaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cuota.
     * @param {CuotaUpsertArgs} args - Arguments to update or create a Cuota.
     * @example
     * // Update or create a Cuota
     * const cuota = await prisma.cuota.upsert({
     *   create: {
     *     // ... data to create a Cuota
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cuota we want to update
     *   }
     * })
     */
    upsert<T extends CuotaUpsertArgs>(args: SelectSubset<T, CuotaUpsertArgs<ExtArgs>>): Prisma__CuotaClient<$Result.GetResult<Prisma.$CuotaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cuotas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuotaCountArgs} args - Arguments to filter Cuotas to count.
     * @example
     * // Count the number of Cuotas
     * const count = await prisma.cuota.count({
     *   where: {
     *     // ... the filter for the Cuotas we want to count
     *   }
     * })
    **/
    count<T extends CuotaCountArgs>(
      args?: Subset<T, CuotaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CuotaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cuota.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuotaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CuotaAggregateArgs>(args: Subset<T, CuotaAggregateArgs>): Prisma.PrismaPromise<GetCuotaAggregateType<T>>

    /**
     * Group by Cuota.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuotaGroupByArgs} args - Group by arguments.
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
      T extends CuotaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CuotaGroupByArgs['orderBy'] }
        : { orderBy?: CuotaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CuotaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCuotaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cuota model
   */
  readonly fields: CuotaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cuota.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CuotaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Comprobante<T extends Cuota$ComprobanteArgs<ExtArgs> = {}>(args?: Subset<T, Cuota$ComprobanteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComprobantePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Actividad<T extends ActividadDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ActividadDefaultArgs<ExtArgs>>): Prisma__ActividadClient<$Result.GetResult<Prisma.$ActividadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Socio<T extends SocioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SocioDefaultArgs<ExtArgs>>): Prisma__SocioClient<$Result.GetResult<Prisma.$SocioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Cuota model
   */
  interface CuotaFieldRefs {
    readonly id: FieldRef<"Cuota", 'Int'>
    readonly fecha_pago: FieldRef<"Cuota", 'DateTime'>
    readonly metodo_pago: FieldRef<"Cuota", 'forma_de_pago'>
    readonly monto: FieldRef<"Cuota", 'Decimal'>
    readonly estado: FieldRef<"Cuota", 'estado_cuota'>
    readonly created_at: FieldRef<"Cuota", 'DateTime'>
    readonly socio_id: FieldRef<"Cuota", 'Int'>
    readonly actividad_id: FieldRef<"Cuota", 'Int'>
    readonly mes: FieldRef<"Cuota", 'Mes'>
  }
    

  // Custom InputTypes
  /**
   * Cuota findUnique
   */
  export type CuotaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuota
     */
    select?: CuotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cuota
     */
    omit?: CuotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuotaInclude<ExtArgs> | null
    /**
     * Filter, which Cuota to fetch.
     */
    where: CuotaWhereUniqueInput
  }

  /**
   * Cuota findUniqueOrThrow
   */
  export type CuotaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuota
     */
    select?: CuotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cuota
     */
    omit?: CuotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuotaInclude<ExtArgs> | null
    /**
     * Filter, which Cuota to fetch.
     */
    where: CuotaWhereUniqueInput
  }

  /**
   * Cuota findFirst
   */
  export type CuotaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuota
     */
    select?: CuotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cuota
     */
    omit?: CuotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuotaInclude<ExtArgs> | null
    /**
     * Filter, which Cuota to fetch.
     */
    where?: CuotaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cuotas to fetch.
     */
    orderBy?: CuotaOrderByWithRelationInput | CuotaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cuotas.
     */
    cursor?: CuotaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cuotas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cuotas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cuotas.
     */
    distinct?: CuotaScalarFieldEnum | CuotaScalarFieldEnum[]
  }

  /**
   * Cuota findFirstOrThrow
   */
  export type CuotaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuota
     */
    select?: CuotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cuota
     */
    omit?: CuotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuotaInclude<ExtArgs> | null
    /**
     * Filter, which Cuota to fetch.
     */
    where?: CuotaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cuotas to fetch.
     */
    orderBy?: CuotaOrderByWithRelationInput | CuotaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cuotas.
     */
    cursor?: CuotaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cuotas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cuotas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cuotas.
     */
    distinct?: CuotaScalarFieldEnum | CuotaScalarFieldEnum[]
  }

  /**
   * Cuota findMany
   */
  export type CuotaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuota
     */
    select?: CuotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cuota
     */
    omit?: CuotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuotaInclude<ExtArgs> | null
    /**
     * Filter, which Cuotas to fetch.
     */
    where?: CuotaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cuotas to fetch.
     */
    orderBy?: CuotaOrderByWithRelationInput | CuotaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cuotas.
     */
    cursor?: CuotaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cuotas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cuotas.
     */
    skip?: number
    distinct?: CuotaScalarFieldEnum | CuotaScalarFieldEnum[]
  }

  /**
   * Cuota create
   */
  export type CuotaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuota
     */
    select?: CuotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cuota
     */
    omit?: CuotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuotaInclude<ExtArgs> | null
    /**
     * The data needed to create a Cuota.
     */
    data: XOR<CuotaCreateInput, CuotaUncheckedCreateInput>
  }

  /**
   * Cuota createMany
   */
  export type CuotaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cuotas.
     */
    data: CuotaCreateManyInput | CuotaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cuota createManyAndReturn
   */
  export type CuotaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuota
     */
    select?: CuotaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cuota
     */
    omit?: CuotaOmit<ExtArgs> | null
    /**
     * The data used to create many Cuotas.
     */
    data: CuotaCreateManyInput | CuotaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuotaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cuota update
   */
  export type CuotaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuota
     */
    select?: CuotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cuota
     */
    omit?: CuotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuotaInclude<ExtArgs> | null
    /**
     * The data needed to update a Cuota.
     */
    data: XOR<CuotaUpdateInput, CuotaUncheckedUpdateInput>
    /**
     * Choose, which Cuota to update.
     */
    where: CuotaWhereUniqueInput
  }

  /**
   * Cuota updateMany
   */
  export type CuotaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cuotas.
     */
    data: XOR<CuotaUpdateManyMutationInput, CuotaUncheckedUpdateManyInput>
    /**
     * Filter which Cuotas to update
     */
    where?: CuotaWhereInput
    /**
     * Limit how many Cuotas to update.
     */
    limit?: number
  }

  /**
   * Cuota updateManyAndReturn
   */
  export type CuotaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuota
     */
    select?: CuotaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cuota
     */
    omit?: CuotaOmit<ExtArgs> | null
    /**
     * The data used to update Cuotas.
     */
    data: XOR<CuotaUpdateManyMutationInput, CuotaUncheckedUpdateManyInput>
    /**
     * Filter which Cuotas to update
     */
    where?: CuotaWhereInput
    /**
     * Limit how many Cuotas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuotaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cuota upsert
   */
  export type CuotaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuota
     */
    select?: CuotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cuota
     */
    omit?: CuotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuotaInclude<ExtArgs> | null
    /**
     * The filter to search for the Cuota to update in case it exists.
     */
    where: CuotaWhereUniqueInput
    /**
     * In case the Cuota found by the `where` argument doesn't exist, create a new Cuota with this data.
     */
    create: XOR<CuotaCreateInput, CuotaUncheckedCreateInput>
    /**
     * In case the Cuota was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CuotaUpdateInput, CuotaUncheckedUpdateInput>
  }

  /**
   * Cuota delete
   */
  export type CuotaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuota
     */
    select?: CuotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cuota
     */
    omit?: CuotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuotaInclude<ExtArgs> | null
    /**
     * Filter which Cuota to delete.
     */
    where: CuotaWhereUniqueInput
  }

  /**
   * Cuota deleteMany
   */
  export type CuotaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cuotas to delete
     */
    where?: CuotaWhereInput
    /**
     * Limit how many Cuotas to delete.
     */
    limit?: number
  }

  /**
   * Cuota.Comprobante
   */
  export type Cuota$ComprobanteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comprobante
     */
    select?: ComprobanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comprobante
     */
    omit?: ComprobanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComprobanteInclude<ExtArgs> | null
    where?: ComprobanteWhereInput
    orderBy?: ComprobanteOrderByWithRelationInput | ComprobanteOrderByWithRelationInput[]
    cursor?: ComprobanteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComprobanteScalarFieldEnum | ComprobanteScalarFieldEnum[]
  }

  /**
   * Cuota without action
   */
  export type CuotaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuota
     */
    select?: CuotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cuota
     */
    omit?: CuotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuotaInclude<ExtArgs> | null
  }


  /**
   * Model Comprobante
   */

  export type AggregateComprobante = {
    _count: ComprobanteCountAggregateOutputType | null
    _avg: ComprobanteAvgAggregateOutputType | null
    _sum: ComprobanteSumAggregateOutputType | null
    _min: ComprobanteMinAggregateOutputType | null
    _max: ComprobanteMaxAggregateOutputType | null
  }

  export type ComprobanteAvgAggregateOutputType = {
    id: number | null
    cuotaId: number | null
  }

  export type ComprobanteSumAggregateOutputType = {
    id: number | null
    cuotaId: number | null
  }

  export type ComprobanteMinAggregateOutputType = {
    id: number | null
    cuotaId: number | null
    url: string | null
    activo: boolean | null
    subido_en: Date | null
  }

  export type ComprobanteMaxAggregateOutputType = {
    id: number | null
    cuotaId: number | null
    url: string | null
    activo: boolean | null
    subido_en: Date | null
  }

  export type ComprobanteCountAggregateOutputType = {
    id: number
    cuotaId: number
    url: number
    activo: number
    subido_en: number
    _all: number
  }


  export type ComprobanteAvgAggregateInputType = {
    id?: true
    cuotaId?: true
  }

  export type ComprobanteSumAggregateInputType = {
    id?: true
    cuotaId?: true
  }

  export type ComprobanteMinAggregateInputType = {
    id?: true
    cuotaId?: true
    url?: true
    activo?: true
    subido_en?: true
  }

  export type ComprobanteMaxAggregateInputType = {
    id?: true
    cuotaId?: true
    url?: true
    activo?: true
    subido_en?: true
  }

  export type ComprobanteCountAggregateInputType = {
    id?: true
    cuotaId?: true
    url?: true
    activo?: true
    subido_en?: true
    _all?: true
  }

  export type ComprobanteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comprobante to aggregate.
     */
    where?: ComprobanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comprobantes to fetch.
     */
    orderBy?: ComprobanteOrderByWithRelationInput | ComprobanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ComprobanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comprobantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comprobantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comprobantes
    **/
    _count?: true | ComprobanteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ComprobanteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ComprobanteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComprobanteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComprobanteMaxAggregateInputType
  }

  export type GetComprobanteAggregateType<T extends ComprobanteAggregateArgs> = {
        [P in keyof T & keyof AggregateComprobante]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComprobante[P]>
      : GetScalarType<T[P], AggregateComprobante[P]>
  }




  export type ComprobanteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComprobanteWhereInput
    orderBy?: ComprobanteOrderByWithAggregationInput | ComprobanteOrderByWithAggregationInput[]
    by: ComprobanteScalarFieldEnum[] | ComprobanteScalarFieldEnum
    having?: ComprobanteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComprobanteCountAggregateInputType | true
    _avg?: ComprobanteAvgAggregateInputType
    _sum?: ComprobanteSumAggregateInputType
    _min?: ComprobanteMinAggregateInputType
    _max?: ComprobanteMaxAggregateInputType
  }

  export type ComprobanteGroupByOutputType = {
    id: number
    cuotaId: number
    url: string
    activo: boolean
    subido_en: Date
    _count: ComprobanteCountAggregateOutputType | null
    _avg: ComprobanteAvgAggregateOutputType | null
    _sum: ComprobanteSumAggregateOutputType | null
    _min: ComprobanteMinAggregateOutputType | null
    _max: ComprobanteMaxAggregateOutputType | null
  }

  type GetComprobanteGroupByPayload<T extends ComprobanteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ComprobanteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComprobanteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComprobanteGroupByOutputType[P]>
            : GetScalarType<T[P], ComprobanteGroupByOutputType[P]>
        }
      >
    >


  export type ComprobanteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cuotaId?: boolean
    url?: boolean
    activo?: boolean
    subido_en?: boolean
    Cuota?: boolean | CuotaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comprobante"]>

  export type ComprobanteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cuotaId?: boolean
    url?: boolean
    activo?: boolean
    subido_en?: boolean
    Cuota?: boolean | CuotaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comprobante"]>

  export type ComprobanteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cuotaId?: boolean
    url?: boolean
    activo?: boolean
    subido_en?: boolean
    Cuota?: boolean | CuotaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comprobante"]>

  export type ComprobanteSelectScalar = {
    id?: boolean
    cuotaId?: boolean
    url?: boolean
    activo?: boolean
    subido_en?: boolean
  }

  export type ComprobanteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cuotaId" | "url" | "activo" | "subido_en", ExtArgs["result"]["comprobante"]>
  export type ComprobanteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Cuota?: boolean | CuotaDefaultArgs<ExtArgs>
  }
  export type ComprobanteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Cuota?: boolean | CuotaDefaultArgs<ExtArgs>
  }
  export type ComprobanteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Cuota?: boolean | CuotaDefaultArgs<ExtArgs>
  }

  export type $ComprobantePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comprobante"
    objects: {
      Cuota: Prisma.$CuotaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cuotaId: number
      url: string
      activo: boolean
      subido_en: Date
    }, ExtArgs["result"]["comprobante"]>
    composites: {}
  }

  type ComprobanteGetPayload<S extends boolean | null | undefined | ComprobanteDefaultArgs> = $Result.GetResult<Prisma.$ComprobantePayload, S>

  type ComprobanteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ComprobanteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ComprobanteCountAggregateInputType | true
    }

  export interface ComprobanteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comprobante'], meta: { name: 'Comprobante' } }
    /**
     * Find zero or one Comprobante that matches the filter.
     * @param {ComprobanteFindUniqueArgs} args - Arguments to find a Comprobante
     * @example
     * // Get one Comprobante
     * const comprobante = await prisma.comprobante.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ComprobanteFindUniqueArgs>(args: SelectSubset<T, ComprobanteFindUniqueArgs<ExtArgs>>): Prisma__ComprobanteClient<$Result.GetResult<Prisma.$ComprobantePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comprobante that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ComprobanteFindUniqueOrThrowArgs} args - Arguments to find a Comprobante
     * @example
     * // Get one Comprobante
     * const comprobante = await prisma.comprobante.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ComprobanteFindUniqueOrThrowArgs>(args: SelectSubset<T, ComprobanteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ComprobanteClient<$Result.GetResult<Prisma.$ComprobantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comprobante that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComprobanteFindFirstArgs} args - Arguments to find a Comprobante
     * @example
     * // Get one Comprobante
     * const comprobante = await prisma.comprobante.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ComprobanteFindFirstArgs>(args?: SelectSubset<T, ComprobanteFindFirstArgs<ExtArgs>>): Prisma__ComprobanteClient<$Result.GetResult<Prisma.$ComprobantePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comprobante that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComprobanteFindFirstOrThrowArgs} args - Arguments to find a Comprobante
     * @example
     * // Get one Comprobante
     * const comprobante = await prisma.comprobante.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ComprobanteFindFirstOrThrowArgs>(args?: SelectSubset<T, ComprobanteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ComprobanteClient<$Result.GetResult<Prisma.$ComprobantePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comprobantes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComprobanteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comprobantes
     * const comprobantes = await prisma.comprobante.findMany()
     * 
     * // Get first 10 Comprobantes
     * const comprobantes = await prisma.comprobante.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const comprobanteWithIdOnly = await prisma.comprobante.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ComprobanteFindManyArgs>(args?: SelectSubset<T, ComprobanteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComprobantePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comprobante.
     * @param {ComprobanteCreateArgs} args - Arguments to create a Comprobante.
     * @example
     * // Create one Comprobante
     * const Comprobante = await prisma.comprobante.create({
     *   data: {
     *     // ... data to create a Comprobante
     *   }
     * })
     * 
     */
    create<T extends ComprobanteCreateArgs>(args: SelectSubset<T, ComprobanteCreateArgs<ExtArgs>>): Prisma__ComprobanteClient<$Result.GetResult<Prisma.$ComprobantePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comprobantes.
     * @param {ComprobanteCreateManyArgs} args - Arguments to create many Comprobantes.
     * @example
     * // Create many Comprobantes
     * const comprobante = await prisma.comprobante.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ComprobanteCreateManyArgs>(args?: SelectSubset<T, ComprobanteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comprobantes and returns the data saved in the database.
     * @param {ComprobanteCreateManyAndReturnArgs} args - Arguments to create many Comprobantes.
     * @example
     * // Create many Comprobantes
     * const comprobante = await prisma.comprobante.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comprobantes and only return the `id`
     * const comprobanteWithIdOnly = await prisma.comprobante.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ComprobanteCreateManyAndReturnArgs>(args?: SelectSubset<T, ComprobanteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComprobantePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comprobante.
     * @param {ComprobanteDeleteArgs} args - Arguments to delete one Comprobante.
     * @example
     * // Delete one Comprobante
     * const Comprobante = await prisma.comprobante.delete({
     *   where: {
     *     // ... filter to delete one Comprobante
     *   }
     * })
     * 
     */
    delete<T extends ComprobanteDeleteArgs>(args: SelectSubset<T, ComprobanteDeleteArgs<ExtArgs>>): Prisma__ComprobanteClient<$Result.GetResult<Prisma.$ComprobantePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comprobante.
     * @param {ComprobanteUpdateArgs} args - Arguments to update one Comprobante.
     * @example
     * // Update one Comprobante
     * const comprobante = await prisma.comprobante.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ComprobanteUpdateArgs>(args: SelectSubset<T, ComprobanteUpdateArgs<ExtArgs>>): Prisma__ComprobanteClient<$Result.GetResult<Prisma.$ComprobantePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comprobantes.
     * @param {ComprobanteDeleteManyArgs} args - Arguments to filter Comprobantes to delete.
     * @example
     * // Delete a few Comprobantes
     * const { count } = await prisma.comprobante.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ComprobanteDeleteManyArgs>(args?: SelectSubset<T, ComprobanteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comprobantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComprobanteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comprobantes
     * const comprobante = await prisma.comprobante.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ComprobanteUpdateManyArgs>(args: SelectSubset<T, ComprobanteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comprobantes and returns the data updated in the database.
     * @param {ComprobanteUpdateManyAndReturnArgs} args - Arguments to update many Comprobantes.
     * @example
     * // Update many Comprobantes
     * const comprobante = await prisma.comprobante.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comprobantes and only return the `id`
     * const comprobanteWithIdOnly = await prisma.comprobante.updateManyAndReturn({
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
    updateManyAndReturn<T extends ComprobanteUpdateManyAndReturnArgs>(args: SelectSubset<T, ComprobanteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComprobantePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comprobante.
     * @param {ComprobanteUpsertArgs} args - Arguments to update or create a Comprobante.
     * @example
     * // Update or create a Comprobante
     * const comprobante = await prisma.comprobante.upsert({
     *   create: {
     *     // ... data to create a Comprobante
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comprobante we want to update
     *   }
     * })
     */
    upsert<T extends ComprobanteUpsertArgs>(args: SelectSubset<T, ComprobanteUpsertArgs<ExtArgs>>): Prisma__ComprobanteClient<$Result.GetResult<Prisma.$ComprobantePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comprobantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComprobanteCountArgs} args - Arguments to filter Comprobantes to count.
     * @example
     * // Count the number of Comprobantes
     * const count = await prisma.comprobante.count({
     *   where: {
     *     // ... the filter for the Comprobantes we want to count
     *   }
     * })
    **/
    count<T extends ComprobanteCountArgs>(
      args?: Subset<T, ComprobanteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComprobanteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comprobante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComprobanteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ComprobanteAggregateArgs>(args: Subset<T, ComprobanteAggregateArgs>): Prisma.PrismaPromise<GetComprobanteAggregateType<T>>

    /**
     * Group by Comprobante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComprobanteGroupByArgs} args - Group by arguments.
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
      T extends ComprobanteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ComprobanteGroupByArgs['orderBy'] }
        : { orderBy?: ComprobanteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ComprobanteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComprobanteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comprobante model
   */
  readonly fields: ComprobanteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comprobante.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ComprobanteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Cuota<T extends CuotaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CuotaDefaultArgs<ExtArgs>>): Prisma__CuotaClient<$Result.GetResult<Prisma.$CuotaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Comprobante model
   */
  interface ComprobanteFieldRefs {
    readonly id: FieldRef<"Comprobante", 'Int'>
    readonly cuotaId: FieldRef<"Comprobante", 'Int'>
    readonly url: FieldRef<"Comprobante", 'String'>
    readonly activo: FieldRef<"Comprobante", 'Boolean'>
    readonly subido_en: FieldRef<"Comprobante", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Comprobante findUnique
   */
  export type ComprobanteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comprobante
     */
    select?: ComprobanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comprobante
     */
    omit?: ComprobanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComprobanteInclude<ExtArgs> | null
    /**
     * Filter, which Comprobante to fetch.
     */
    where: ComprobanteWhereUniqueInput
  }

  /**
   * Comprobante findUniqueOrThrow
   */
  export type ComprobanteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comprobante
     */
    select?: ComprobanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comprobante
     */
    omit?: ComprobanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComprobanteInclude<ExtArgs> | null
    /**
     * Filter, which Comprobante to fetch.
     */
    where: ComprobanteWhereUniqueInput
  }

  /**
   * Comprobante findFirst
   */
  export type ComprobanteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comprobante
     */
    select?: ComprobanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comprobante
     */
    omit?: ComprobanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComprobanteInclude<ExtArgs> | null
    /**
     * Filter, which Comprobante to fetch.
     */
    where?: ComprobanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comprobantes to fetch.
     */
    orderBy?: ComprobanteOrderByWithRelationInput | ComprobanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comprobantes.
     */
    cursor?: ComprobanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comprobantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comprobantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comprobantes.
     */
    distinct?: ComprobanteScalarFieldEnum | ComprobanteScalarFieldEnum[]
  }

  /**
   * Comprobante findFirstOrThrow
   */
  export type ComprobanteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comprobante
     */
    select?: ComprobanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comprobante
     */
    omit?: ComprobanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComprobanteInclude<ExtArgs> | null
    /**
     * Filter, which Comprobante to fetch.
     */
    where?: ComprobanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comprobantes to fetch.
     */
    orderBy?: ComprobanteOrderByWithRelationInput | ComprobanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comprobantes.
     */
    cursor?: ComprobanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comprobantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comprobantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comprobantes.
     */
    distinct?: ComprobanteScalarFieldEnum | ComprobanteScalarFieldEnum[]
  }

  /**
   * Comprobante findMany
   */
  export type ComprobanteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comprobante
     */
    select?: ComprobanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comprobante
     */
    omit?: ComprobanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComprobanteInclude<ExtArgs> | null
    /**
     * Filter, which Comprobantes to fetch.
     */
    where?: ComprobanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comprobantes to fetch.
     */
    orderBy?: ComprobanteOrderByWithRelationInput | ComprobanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comprobantes.
     */
    cursor?: ComprobanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comprobantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comprobantes.
     */
    skip?: number
    distinct?: ComprobanteScalarFieldEnum | ComprobanteScalarFieldEnum[]
  }

  /**
   * Comprobante create
   */
  export type ComprobanteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comprobante
     */
    select?: ComprobanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comprobante
     */
    omit?: ComprobanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComprobanteInclude<ExtArgs> | null
    /**
     * The data needed to create a Comprobante.
     */
    data: XOR<ComprobanteCreateInput, ComprobanteUncheckedCreateInput>
  }

  /**
   * Comprobante createMany
   */
  export type ComprobanteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comprobantes.
     */
    data: ComprobanteCreateManyInput | ComprobanteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comprobante createManyAndReturn
   */
  export type ComprobanteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comprobante
     */
    select?: ComprobanteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comprobante
     */
    omit?: ComprobanteOmit<ExtArgs> | null
    /**
     * The data used to create many Comprobantes.
     */
    data: ComprobanteCreateManyInput | ComprobanteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComprobanteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comprobante update
   */
  export type ComprobanteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comprobante
     */
    select?: ComprobanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comprobante
     */
    omit?: ComprobanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComprobanteInclude<ExtArgs> | null
    /**
     * The data needed to update a Comprobante.
     */
    data: XOR<ComprobanteUpdateInput, ComprobanteUncheckedUpdateInput>
    /**
     * Choose, which Comprobante to update.
     */
    where: ComprobanteWhereUniqueInput
  }

  /**
   * Comprobante updateMany
   */
  export type ComprobanteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comprobantes.
     */
    data: XOR<ComprobanteUpdateManyMutationInput, ComprobanteUncheckedUpdateManyInput>
    /**
     * Filter which Comprobantes to update
     */
    where?: ComprobanteWhereInput
    /**
     * Limit how many Comprobantes to update.
     */
    limit?: number
  }

  /**
   * Comprobante updateManyAndReturn
   */
  export type ComprobanteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comprobante
     */
    select?: ComprobanteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comprobante
     */
    omit?: ComprobanteOmit<ExtArgs> | null
    /**
     * The data used to update Comprobantes.
     */
    data: XOR<ComprobanteUpdateManyMutationInput, ComprobanteUncheckedUpdateManyInput>
    /**
     * Filter which Comprobantes to update
     */
    where?: ComprobanteWhereInput
    /**
     * Limit how many Comprobantes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComprobanteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comprobante upsert
   */
  export type ComprobanteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comprobante
     */
    select?: ComprobanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comprobante
     */
    omit?: ComprobanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComprobanteInclude<ExtArgs> | null
    /**
     * The filter to search for the Comprobante to update in case it exists.
     */
    where: ComprobanteWhereUniqueInput
    /**
     * In case the Comprobante found by the `where` argument doesn't exist, create a new Comprobante with this data.
     */
    create: XOR<ComprobanteCreateInput, ComprobanteUncheckedCreateInput>
    /**
     * In case the Comprobante was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ComprobanteUpdateInput, ComprobanteUncheckedUpdateInput>
  }

  /**
   * Comprobante delete
   */
  export type ComprobanteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comprobante
     */
    select?: ComprobanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comprobante
     */
    omit?: ComprobanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComprobanteInclude<ExtArgs> | null
    /**
     * Filter which Comprobante to delete.
     */
    where: ComprobanteWhereUniqueInput
  }

  /**
   * Comprobante deleteMany
   */
  export type ComprobanteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comprobantes to delete
     */
    where?: ComprobanteWhereInput
    /**
     * Limit how many Comprobantes to delete.
     */
    limit?: number
  }

  /**
   * Comprobante without action
   */
  export type ComprobanteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comprobante
     */
    select?: ComprobanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comprobante
     */
    omit?: ComprobanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComprobanteInclude<ExtArgs> | null
  }


  /**
   * Model Profesor
   */

  export type AggregateProfesor = {
    _count: ProfesorCountAggregateOutputType | null
    _avg: ProfesorAvgAggregateOutputType | null
    _sum: ProfesorSumAggregateOutputType | null
    _min: ProfesorMinAggregateOutputType | null
    _max: ProfesorMaxAggregateOutputType | null
  }

  export type ProfesorAvgAggregateOutputType = {
    id: number | null
  }

  export type ProfesorSumAggregateOutputType = {
    id: number | null
  }

  export type ProfesorMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    apellido: string | null
    email: string | null
    activo: boolean | null
    createdAt: Date | null
  }

  export type ProfesorMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    apellido: string | null
    email: string | null
    activo: boolean | null
    createdAt: Date | null
  }

  export type ProfesorCountAggregateOutputType = {
    id: number
    nombre: number
    apellido: number
    email: number
    activo: number
    createdAt: number
    _all: number
  }


  export type ProfesorAvgAggregateInputType = {
    id?: true
  }

  export type ProfesorSumAggregateInputType = {
    id?: true
  }

  export type ProfesorMinAggregateInputType = {
    id?: true
    nombre?: true
    apellido?: true
    email?: true
    activo?: true
    createdAt?: true
  }

  export type ProfesorMaxAggregateInputType = {
    id?: true
    nombre?: true
    apellido?: true
    email?: true
    activo?: true
    createdAt?: true
  }

  export type ProfesorCountAggregateInputType = {
    id?: true
    nombre?: true
    apellido?: true
    email?: true
    activo?: true
    createdAt?: true
    _all?: true
  }

  export type ProfesorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profesor to aggregate.
     */
    where?: ProfesorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profesors to fetch.
     */
    orderBy?: ProfesorOrderByWithRelationInput | ProfesorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfesorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profesors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profesors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profesors
    **/
    _count?: true | ProfesorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfesorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfesorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfesorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfesorMaxAggregateInputType
  }

  export type GetProfesorAggregateType<T extends ProfesorAggregateArgs> = {
        [P in keyof T & keyof AggregateProfesor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfesor[P]>
      : GetScalarType<T[P], AggregateProfesor[P]>
  }




  export type ProfesorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfesorWhereInput
    orderBy?: ProfesorOrderByWithAggregationInput | ProfesorOrderByWithAggregationInput[]
    by: ProfesorScalarFieldEnum[] | ProfesorScalarFieldEnum
    having?: ProfesorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfesorCountAggregateInputType | true
    _avg?: ProfesorAvgAggregateInputType
    _sum?: ProfesorSumAggregateInputType
    _min?: ProfesorMinAggregateInputType
    _max?: ProfesorMaxAggregateInputType
  }

  export type ProfesorGroupByOutputType = {
    id: number
    nombre: string
    apellido: string
    email: string
    activo: boolean
    createdAt: Date
    _count: ProfesorCountAggregateOutputType | null
    _avg: ProfesorAvgAggregateOutputType | null
    _sum: ProfesorSumAggregateOutputType | null
    _min: ProfesorMinAggregateOutputType | null
    _max: ProfesorMaxAggregateOutputType | null
  }

  type GetProfesorGroupByPayload<T extends ProfesorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfesorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfesorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfesorGroupByOutputType[P]>
            : GetScalarType<T[P], ProfesorGroupByOutputType[P]>
        }
      >
    >


  export type ProfesorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    apellido?: boolean
    email?: boolean
    activo?: boolean
    createdAt?: boolean
    clases?: boolean | Profesor$clasesArgs<ExtArgs>
    _count?: boolean | ProfesorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profesor"]>

  export type ProfesorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    apellido?: boolean
    email?: boolean
    activo?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["profesor"]>

  export type ProfesorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    apellido?: boolean
    email?: boolean
    activo?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["profesor"]>

  export type ProfesorSelectScalar = {
    id?: boolean
    nombre?: boolean
    apellido?: boolean
    email?: boolean
    activo?: boolean
    createdAt?: boolean
  }

  export type ProfesorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "apellido" | "email" | "activo" | "createdAt", ExtArgs["result"]["profesor"]>
  export type ProfesorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clases?: boolean | Profesor$clasesArgs<ExtArgs>
    _count?: boolean | ProfesorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProfesorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProfesorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProfesorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profesor"
    objects: {
      clases: Prisma.$ClasePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      apellido: string
      email: string
      activo: boolean
      createdAt: Date
    }, ExtArgs["result"]["profesor"]>
    composites: {}
  }

  type ProfesorGetPayload<S extends boolean | null | undefined | ProfesorDefaultArgs> = $Result.GetResult<Prisma.$ProfesorPayload, S>

  type ProfesorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfesorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfesorCountAggregateInputType | true
    }

  export interface ProfesorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profesor'], meta: { name: 'Profesor' } }
    /**
     * Find zero or one Profesor that matches the filter.
     * @param {ProfesorFindUniqueArgs} args - Arguments to find a Profesor
     * @example
     * // Get one Profesor
     * const profesor = await prisma.profesor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfesorFindUniqueArgs>(args: SelectSubset<T, ProfesorFindUniqueArgs<ExtArgs>>): Prisma__ProfesorClient<$Result.GetResult<Prisma.$ProfesorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profesor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfesorFindUniqueOrThrowArgs} args - Arguments to find a Profesor
     * @example
     * // Get one Profesor
     * const profesor = await prisma.profesor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfesorFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfesorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfesorClient<$Result.GetResult<Prisma.$ProfesorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profesor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfesorFindFirstArgs} args - Arguments to find a Profesor
     * @example
     * // Get one Profesor
     * const profesor = await prisma.profesor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfesorFindFirstArgs>(args?: SelectSubset<T, ProfesorFindFirstArgs<ExtArgs>>): Prisma__ProfesorClient<$Result.GetResult<Prisma.$ProfesorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profesor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfesorFindFirstOrThrowArgs} args - Arguments to find a Profesor
     * @example
     * // Get one Profesor
     * const profesor = await prisma.profesor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfesorFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfesorFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfesorClient<$Result.GetResult<Prisma.$ProfesorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profesors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfesorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profesors
     * const profesors = await prisma.profesor.findMany()
     * 
     * // Get first 10 Profesors
     * const profesors = await prisma.profesor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profesorWithIdOnly = await prisma.profesor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfesorFindManyArgs>(args?: SelectSubset<T, ProfesorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfesorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profesor.
     * @param {ProfesorCreateArgs} args - Arguments to create a Profesor.
     * @example
     * // Create one Profesor
     * const Profesor = await prisma.profesor.create({
     *   data: {
     *     // ... data to create a Profesor
     *   }
     * })
     * 
     */
    create<T extends ProfesorCreateArgs>(args: SelectSubset<T, ProfesorCreateArgs<ExtArgs>>): Prisma__ProfesorClient<$Result.GetResult<Prisma.$ProfesorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profesors.
     * @param {ProfesorCreateManyArgs} args - Arguments to create many Profesors.
     * @example
     * // Create many Profesors
     * const profesor = await prisma.profesor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfesorCreateManyArgs>(args?: SelectSubset<T, ProfesorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profesors and returns the data saved in the database.
     * @param {ProfesorCreateManyAndReturnArgs} args - Arguments to create many Profesors.
     * @example
     * // Create many Profesors
     * const profesor = await prisma.profesor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profesors and only return the `id`
     * const profesorWithIdOnly = await prisma.profesor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfesorCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfesorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfesorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profesor.
     * @param {ProfesorDeleteArgs} args - Arguments to delete one Profesor.
     * @example
     * // Delete one Profesor
     * const Profesor = await prisma.profesor.delete({
     *   where: {
     *     // ... filter to delete one Profesor
     *   }
     * })
     * 
     */
    delete<T extends ProfesorDeleteArgs>(args: SelectSubset<T, ProfesorDeleteArgs<ExtArgs>>): Prisma__ProfesorClient<$Result.GetResult<Prisma.$ProfesorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profesor.
     * @param {ProfesorUpdateArgs} args - Arguments to update one Profesor.
     * @example
     * // Update one Profesor
     * const profesor = await prisma.profesor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfesorUpdateArgs>(args: SelectSubset<T, ProfesorUpdateArgs<ExtArgs>>): Prisma__ProfesorClient<$Result.GetResult<Prisma.$ProfesorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profesors.
     * @param {ProfesorDeleteManyArgs} args - Arguments to filter Profesors to delete.
     * @example
     * // Delete a few Profesors
     * const { count } = await prisma.profesor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfesorDeleteManyArgs>(args?: SelectSubset<T, ProfesorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profesors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfesorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profesors
     * const profesor = await prisma.profesor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfesorUpdateManyArgs>(args: SelectSubset<T, ProfesorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profesors and returns the data updated in the database.
     * @param {ProfesorUpdateManyAndReturnArgs} args - Arguments to update many Profesors.
     * @example
     * // Update many Profesors
     * const profesor = await prisma.profesor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profesors and only return the `id`
     * const profesorWithIdOnly = await prisma.profesor.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProfesorUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfesorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfesorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profesor.
     * @param {ProfesorUpsertArgs} args - Arguments to update or create a Profesor.
     * @example
     * // Update or create a Profesor
     * const profesor = await prisma.profesor.upsert({
     *   create: {
     *     // ... data to create a Profesor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profesor we want to update
     *   }
     * })
     */
    upsert<T extends ProfesorUpsertArgs>(args: SelectSubset<T, ProfesorUpsertArgs<ExtArgs>>): Prisma__ProfesorClient<$Result.GetResult<Prisma.$ProfesorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profesors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfesorCountArgs} args - Arguments to filter Profesors to count.
     * @example
     * // Count the number of Profesors
     * const count = await prisma.profesor.count({
     *   where: {
     *     // ... the filter for the Profesors we want to count
     *   }
     * })
    **/
    count<T extends ProfesorCountArgs>(
      args?: Subset<T, ProfesorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfesorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profesor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfesorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfesorAggregateArgs>(args: Subset<T, ProfesorAggregateArgs>): Prisma.PrismaPromise<GetProfesorAggregateType<T>>

    /**
     * Group by Profesor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfesorGroupByArgs} args - Group by arguments.
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
      T extends ProfesorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfesorGroupByArgs['orderBy'] }
        : { orderBy?: ProfesorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProfesorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfesorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profesor model
   */
  readonly fields: ProfesorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profesor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfesorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clases<T extends Profesor$clasesArgs<ExtArgs> = {}>(args?: Subset<T, Profesor$clasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Profesor model
   */
  interface ProfesorFieldRefs {
    readonly id: FieldRef<"Profesor", 'Int'>
    readonly nombre: FieldRef<"Profesor", 'String'>
    readonly apellido: FieldRef<"Profesor", 'String'>
    readonly email: FieldRef<"Profesor", 'String'>
    readonly activo: FieldRef<"Profesor", 'Boolean'>
    readonly createdAt: FieldRef<"Profesor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Profesor findUnique
   */
  export type ProfesorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesor
     */
    select?: ProfesorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profesor
     */
    omit?: ProfesorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesorInclude<ExtArgs> | null
    /**
     * Filter, which Profesor to fetch.
     */
    where: ProfesorWhereUniqueInput
  }

  /**
   * Profesor findUniqueOrThrow
   */
  export type ProfesorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesor
     */
    select?: ProfesorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profesor
     */
    omit?: ProfesorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesorInclude<ExtArgs> | null
    /**
     * Filter, which Profesor to fetch.
     */
    where: ProfesorWhereUniqueInput
  }

  /**
   * Profesor findFirst
   */
  export type ProfesorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesor
     */
    select?: ProfesorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profesor
     */
    omit?: ProfesorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesorInclude<ExtArgs> | null
    /**
     * Filter, which Profesor to fetch.
     */
    where?: ProfesorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profesors to fetch.
     */
    orderBy?: ProfesorOrderByWithRelationInput | ProfesorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profesors.
     */
    cursor?: ProfesorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profesors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profesors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profesors.
     */
    distinct?: ProfesorScalarFieldEnum | ProfesorScalarFieldEnum[]
  }

  /**
   * Profesor findFirstOrThrow
   */
  export type ProfesorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesor
     */
    select?: ProfesorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profesor
     */
    omit?: ProfesorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesorInclude<ExtArgs> | null
    /**
     * Filter, which Profesor to fetch.
     */
    where?: ProfesorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profesors to fetch.
     */
    orderBy?: ProfesorOrderByWithRelationInput | ProfesorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profesors.
     */
    cursor?: ProfesorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profesors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profesors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profesors.
     */
    distinct?: ProfesorScalarFieldEnum | ProfesorScalarFieldEnum[]
  }

  /**
   * Profesor findMany
   */
  export type ProfesorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesor
     */
    select?: ProfesorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profesor
     */
    omit?: ProfesorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesorInclude<ExtArgs> | null
    /**
     * Filter, which Profesors to fetch.
     */
    where?: ProfesorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profesors to fetch.
     */
    orderBy?: ProfesorOrderByWithRelationInput | ProfesorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profesors.
     */
    cursor?: ProfesorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profesors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profesors.
     */
    skip?: number
    distinct?: ProfesorScalarFieldEnum | ProfesorScalarFieldEnum[]
  }

  /**
   * Profesor create
   */
  export type ProfesorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesor
     */
    select?: ProfesorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profesor
     */
    omit?: ProfesorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesorInclude<ExtArgs> | null
    /**
     * The data needed to create a Profesor.
     */
    data: XOR<ProfesorCreateInput, ProfesorUncheckedCreateInput>
  }

  /**
   * Profesor createMany
   */
  export type ProfesorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profesors.
     */
    data: ProfesorCreateManyInput | ProfesorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profesor createManyAndReturn
   */
  export type ProfesorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesor
     */
    select?: ProfesorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profesor
     */
    omit?: ProfesorOmit<ExtArgs> | null
    /**
     * The data used to create many Profesors.
     */
    data: ProfesorCreateManyInput | ProfesorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profesor update
   */
  export type ProfesorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesor
     */
    select?: ProfesorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profesor
     */
    omit?: ProfesorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesorInclude<ExtArgs> | null
    /**
     * The data needed to update a Profesor.
     */
    data: XOR<ProfesorUpdateInput, ProfesorUncheckedUpdateInput>
    /**
     * Choose, which Profesor to update.
     */
    where: ProfesorWhereUniqueInput
  }

  /**
   * Profesor updateMany
   */
  export type ProfesorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profesors.
     */
    data: XOR<ProfesorUpdateManyMutationInput, ProfesorUncheckedUpdateManyInput>
    /**
     * Filter which Profesors to update
     */
    where?: ProfesorWhereInput
    /**
     * Limit how many Profesors to update.
     */
    limit?: number
  }

  /**
   * Profesor updateManyAndReturn
   */
  export type ProfesorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesor
     */
    select?: ProfesorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profesor
     */
    omit?: ProfesorOmit<ExtArgs> | null
    /**
     * The data used to update Profesors.
     */
    data: XOR<ProfesorUpdateManyMutationInput, ProfesorUncheckedUpdateManyInput>
    /**
     * Filter which Profesors to update
     */
    where?: ProfesorWhereInput
    /**
     * Limit how many Profesors to update.
     */
    limit?: number
  }

  /**
   * Profesor upsert
   */
  export type ProfesorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesor
     */
    select?: ProfesorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profesor
     */
    omit?: ProfesorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesorInclude<ExtArgs> | null
    /**
     * The filter to search for the Profesor to update in case it exists.
     */
    where: ProfesorWhereUniqueInput
    /**
     * In case the Profesor found by the `where` argument doesn't exist, create a new Profesor with this data.
     */
    create: XOR<ProfesorCreateInput, ProfesorUncheckedCreateInput>
    /**
     * In case the Profesor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfesorUpdateInput, ProfesorUncheckedUpdateInput>
  }

  /**
   * Profesor delete
   */
  export type ProfesorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesor
     */
    select?: ProfesorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profesor
     */
    omit?: ProfesorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesorInclude<ExtArgs> | null
    /**
     * Filter which Profesor to delete.
     */
    where: ProfesorWhereUniqueInput
  }

  /**
   * Profesor deleteMany
   */
  export type ProfesorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profesors to delete
     */
    where?: ProfesorWhereInput
    /**
     * Limit how many Profesors to delete.
     */
    limit?: number
  }

  /**
   * Profesor.clases
   */
  export type Profesor$clasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clase
     */
    select?: ClaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clase
     */
    omit?: ClaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaseInclude<ExtArgs> | null
    where?: ClaseWhereInput
    orderBy?: ClaseOrderByWithRelationInput | ClaseOrderByWithRelationInput[]
    cursor?: ClaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClaseScalarFieldEnum | ClaseScalarFieldEnum[]
  }

  /**
   * Profesor without action
   */
  export type ProfesorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesor
     */
    select?: ProfesorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profesor
     */
    omit?: ProfesorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesorInclude<ExtArgs> | null
  }


  /**
   * Model ClaseSocio
   */

  export type AggregateClaseSocio = {
    _count: ClaseSocioCountAggregateOutputType | null
    _avg: ClaseSocioAvgAggregateOutputType | null
    _sum: ClaseSocioSumAggregateOutputType | null
    _min: ClaseSocioMinAggregateOutputType | null
    _max: ClaseSocioMaxAggregateOutputType | null
  }

  export type ClaseSocioAvgAggregateOutputType = {
    id: number | null
    claseId: number | null
    socioId: number | null
  }

  export type ClaseSocioSumAggregateOutputType = {
    id: number | null
    claseId: number | null
    socioId: number | null
  }

  export type ClaseSocioMinAggregateOutputType = {
    id: number | null
    claseId: number | null
    socioId: number | null
  }

  export type ClaseSocioMaxAggregateOutputType = {
    id: number | null
    claseId: number | null
    socioId: number | null
  }

  export type ClaseSocioCountAggregateOutputType = {
    id: number
    claseId: number
    socioId: number
    _all: number
  }


  export type ClaseSocioAvgAggregateInputType = {
    id?: true
    claseId?: true
    socioId?: true
  }

  export type ClaseSocioSumAggregateInputType = {
    id?: true
    claseId?: true
    socioId?: true
  }

  export type ClaseSocioMinAggregateInputType = {
    id?: true
    claseId?: true
    socioId?: true
  }

  export type ClaseSocioMaxAggregateInputType = {
    id?: true
    claseId?: true
    socioId?: true
  }

  export type ClaseSocioCountAggregateInputType = {
    id?: true
    claseId?: true
    socioId?: true
    _all?: true
  }

  export type ClaseSocioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClaseSocio to aggregate.
     */
    where?: ClaseSocioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClaseSocios to fetch.
     */
    orderBy?: ClaseSocioOrderByWithRelationInput | ClaseSocioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClaseSocioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClaseSocios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClaseSocios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClaseSocios
    **/
    _count?: true | ClaseSocioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClaseSocioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClaseSocioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClaseSocioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClaseSocioMaxAggregateInputType
  }

  export type GetClaseSocioAggregateType<T extends ClaseSocioAggregateArgs> = {
        [P in keyof T & keyof AggregateClaseSocio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClaseSocio[P]>
      : GetScalarType<T[P], AggregateClaseSocio[P]>
  }




  export type ClaseSocioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClaseSocioWhereInput
    orderBy?: ClaseSocioOrderByWithAggregationInput | ClaseSocioOrderByWithAggregationInput[]
    by: ClaseSocioScalarFieldEnum[] | ClaseSocioScalarFieldEnum
    having?: ClaseSocioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClaseSocioCountAggregateInputType | true
    _avg?: ClaseSocioAvgAggregateInputType
    _sum?: ClaseSocioSumAggregateInputType
    _min?: ClaseSocioMinAggregateInputType
    _max?: ClaseSocioMaxAggregateInputType
  }

  export type ClaseSocioGroupByOutputType = {
    id: number
    claseId: number
    socioId: number
    _count: ClaseSocioCountAggregateOutputType | null
    _avg: ClaseSocioAvgAggregateOutputType | null
    _sum: ClaseSocioSumAggregateOutputType | null
    _min: ClaseSocioMinAggregateOutputType | null
    _max: ClaseSocioMaxAggregateOutputType | null
  }

  type GetClaseSocioGroupByPayload<T extends ClaseSocioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClaseSocioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClaseSocioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClaseSocioGroupByOutputType[P]>
            : GetScalarType<T[P], ClaseSocioGroupByOutputType[P]>
        }
      >
    >


  export type ClaseSocioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    claseId?: boolean
    socioId?: boolean
    Clase?: boolean | ClaseDefaultArgs<ExtArgs>
    Socio?: boolean | SocioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["claseSocio"]>

  export type ClaseSocioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    claseId?: boolean
    socioId?: boolean
    Clase?: boolean | ClaseDefaultArgs<ExtArgs>
    Socio?: boolean | SocioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["claseSocio"]>

  export type ClaseSocioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    claseId?: boolean
    socioId?: boolean
    Clase?: boolean | ClaseDefaultArgs<ExtArgs>
    Socio?: boolean | SocioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["claseSocio"]>

  export type ClaseSocioSelectScalar = {
    id?: boolean
    claseId?: boolean
    socioId?: boolean
  }

  export type ClaseSocioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "claseId" | "socioId", ExtArgs["result"]["claseSocio"]>
  export type ClaseSocioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Clase?: boolean | ClaseDefaultArgs<ExtArgs>
    Socio?: boolean | SocioDefaultArgs<ExtArgs>
  }
  export type ClaseSocioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Clase?: boolean | ClaseDefaultArgs<ExtArgs>
    Socio?: boolean | SocioDefaultArgs<ExtArgs>
  }
  export type ClaseSocioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Clase?: boolean | ClaseDefaultArgs<ExtArgs>
    Socio?: boolean | SocioDefaultArgs<ExtArgs>
  }

  export type $ClaseSocioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClaseSocio"
    objects: {
      Clase: Prisma.$ClasePayload<ExtArgs>
      Socio: Prisma.$SocioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      claseId: number
      socioId: number
    }, ExtArgs["result"]["claseSocio"]>
    composites: {}
  }

  type ClaseSocioGetPayload<S extends boolean | null | undefined | ClaseSocioDefaultArgs> = $Result.GetResult<Prisma.$ClaseSocioPayload, S>

  type ClaseSocioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClaseSocioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClaseSocioCountAggregateInputType | true
    }

  export interface ClaseSocioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClaseSocio'], meta: { name: 'ClaseSocio' } }
    /**
     * Find zero or one ClaseSocio that matches the filter.
     * @param {ClaseSocioFindUniqueArgs} args - Arguments to find a ClaseSocio
     * @example
     * // Get one ClaseSocio
     * const claseSocio = await prisma.claseSocio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClaseSocioFindUniqueArgs>(args: SelectSubset<T, ClaseSocioFindUniqueArgs<ExtArgs>>): Prisma__ClaseSocioClient<$Result.GetResult<Prisma.$ClaseSocioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ClaseSocio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClaseSocioFindUniqueOrThrowArgs} args - Arguments to find a ClaseSocio
     * @example
     * // Get one ClaseSocio
     * const claseSocio = await prisma.claseSocio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClaseSocioFindUniqueOrThrowArgs>(args: SelectSubset<T, ClaseSocioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClaseSocioClient<$Result.GetResult<Prisma.$ClaseSocioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClaseSocio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaseSocioFindFirstArgs} args - Arguments to find a ClaseSocio
     * @example
     * // Get one ClaseSocio
     * const claseSocio = await prisma.claseSocio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClaseSocioFindFirstArgs>(args?: SelectSubset<T, ClaseSocioFindFirstArgs<ExtArgs>>): Prisma__ClaseSocioClient<$Result.GetResult<Prisma.$ClaseSocioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClaseSocio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaseSocioFindFirstOrThrowArgs} args - Arguments to find a ClaseSocio
     * @example
     * // Get one ClaseSocio
     * const claseSocio = await prisma.claseSocio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClaseSocioFindFirstOrThrowArgs>(args?: SelectSubset<T, ClaseSocioFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClaseSocioClient<$Result.GetResult<Prisma.$ClaseSocioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ClaseSocios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaseSocioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClaseSocios
     * const claseSocios = await prisma.claseSocio.findMany()
     * 
     * // Get first 10 ClaseSocios
     * const claseSocios = await prisma.claseSocio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const claseSocioWithIdOnly = await prisma.claseSocio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClaseSocioFindManyArgs>(args?: SelectSubset<T, ClaseSocioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClaseSocioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ClaseSocio.
     * @param {ClaseSocioCreateArgs} args - Arguments to create a ClaseSocio.
     * @example
     * // Create one ClaseSocio
     * const ClaseSocio = await prisma.claseSocio.create({
     *   data: {
     *     // ... data to create a ClaseSocio
     *   }
     * })
     * 
     */
    create<T extends ClaseSocioCreateArgs>(args: SelectSubset<T, ClaseSocioCreateArgs<ExtArgs>>): Prisma__ClaseSocioClient<$Result.GetResult<Prisma.$ClaseSocioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ClaseSocios.
     * @param {ClaseSocioCreateManyArgs} args - Arguments to create many ClaseSocios.
     * @example
     * // Create many ClaseSocios
     * const claseSocio = await prisma.claseSocio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClaseSocioCreateManyArgs>(args?: SelectSubset<T, ClaseSocioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ClaseSocios and returns the data saved in the database.
     * @param {ClaseSocioCreateManyAndReturnArgs} args - Arguments to create many ClaseSocios.
     * @example
     * // Create many ClaseSocios
     * const claseSocio = await prisma.claseSocio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ClaseSocios and only return the `id`
     * const claseSocioWithIdOnly = await prisma.claseSocio.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClaseSocioCreateManyAndReturnArgs>(args?: SelectSubset<T, ClaseSocioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClaseSocioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ClaseSocio.
     * @param {ClaseSocioDeleteArgs} args - Arguments to delete one ClaseSocio.
     * @example
     * // Delete one ClaseSocio
     * const ClaseSocio = await prisma.claseSocio.delete({
     *   where: {
     *     // ... filter to delete one ClaseSocio
     *   }
     * })
     * 
     */
    delete<T extends ClaseSocioDeleteArgs>(args: SelectSubset<T, ClaseSocioDeleteArgs<ExtArgs>>): Prisma__ClaseSocioClient<$Result.GetResult<Prisma.$ClaseSocioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ClaseSocio.
     * @param {ClaseSocioUpdateArgs} args - Arguments to update one ClaseSocio.
     * @example
     * // Update one ClaseSocio
     * const claseSocio = await prisma.claseSocio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClaseSocioUpdateArgs>(args: SelectSubset<T, ClaseSocioUpdateArgs<ExtArgs>>): Prisma__ClaseSocioClient<$Result.GetResult<Prisma.$ClaseSocioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ClaseSocios.
     * @param {ClaseSocioDeleteManyArgs} args - Arguments to filter ClaseSocios to delete.
     * @example
     * // Delete a few ClaseSocios
     * const { count } = await prisma.claseSocio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClaseSocioDeleteManyArgs>(args?: SelectSubset<T, ClaseSocioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClaseSocios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaseSocioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClaseSocios
     * const claseSocio = await prisma.claseSocio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClaseSocioUpdateManyArgs>(args: SelectSubset<T, ClaseSocioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClaseSocios and returns the data updated in the database.
     * @param {ClaseSocioUpdateManyAndReturnArgs} args - Arguments to update many ClaseSocios.
     * @example
     * // Update many ClaseSocios
     * const claseSocio = await prisma.claseSocio.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ClaseSocios and only return the `id`
     * const claseSocioWithIdOnly = await prisma.claseSocio.updateManyAndReturn({
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
    updateManyAndReturn<T extends ClaseSocioUpdateManyAndReturnArgs>(args: SelectSubset<T, ClaseSocioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClaseSocioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ClaseSocio.
     * @param {ClaseSocioUpsertArgs} args - Arguments to update or create a ClaseSocio.
     * @example
     * // Update or create a ClaseSocio
     * const claseSocio = await prisma.claseSocio.upsert({
     *   create: {
     *     // ... data to create a ClaseSocio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClaseSocio we want to update
     *   }
     * })
     */
    upsert<T extends ClaseSocioUpsertArgs>(args: SelectSubset<T, ClaseSocioUpsertArgs<ExtArgs>>): Prisma__ClaseSocioClient<$Result.GetResult<Prisma.$ClaseSocioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ClaseSocios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaseSocioCountArgs} args - Arguments to filter ClaseSocios to count.
     * @example
     * // Count the number of ClaseSocios
     * const count = await prisma.claseSocio.count({
     *   where: {
     *     // ... the filter for the ClaseSocios we want to count
     *   }
     * })
    **/
    count<T extends ClaseSocioCountArgs>(
      args?: Subset<T, ClaseSocioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClaseSocioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClaseSocio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaseSocioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClaseSocioAggregateArgs>(args: Subset<T, ClaseSocioAggregateArgs>): Prisma.PrismaPromise<GetClaseSocioAggregateType<T>>

    /**
     * Group by ClaseSocio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaseSocioGroupByArgs} args - Group by arguments.
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
      T extends ClaseSocioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClaseSocioGroupByArgs['orderBy'] }
        : { orderBy?: ClaseSocioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClaseSocioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClaseSocioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClaseSocio model
   */
  readonly fields: ClaseSocioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClaseSocio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClaseSocioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Clase<T extends ClaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClaseDefaultArgs<ExtArgs>>): Prisma__ClaseClient<$Result.GetResult<Prisma.$ClasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Socio<T extends SocioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SocioDefaultArgs<ExtArgs>>): Prisma__SocioClient<$Result.GetResult<Prisma.$SocioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ClaseSocio model
   */
  interface ClaseSocioFieldRefs {
    readonly id: FieldRef<"ClaseSocio", 'Int'>
    readonly claseId: FieldRef<"ClaseSocio", 'Int'>
    readonly socioId: FieldRef<"ClaseSocio", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ClaseSocio findUnique
   */
  export type ClaseSocioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaseSocio
     */
    select?: ClaseSocioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClaseSocio
     */
    omit?: ClaseSocioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaseSocioInclude<ExtArgs> | null
    /**
     * Filter, which ClaseSocio to fetch.
     */
    where: ClaseSocioWhereUniqueInput
  }

  /**
   * ClaseSocio findUniqueOrThrow
   */
  export type ClaseSocioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaseSocio
     */
    select?: ClaseSocioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClaseSocio
     */
    omit?: ClaseSocioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaseSocioInclude<ExtArgs> | null
    /**
     * Filter, which ClaseSocio to fetch.
     */
    where: ClaseSocioWhereUniqueInput
  }

  /**
   * ClaseSocio findFirst
   */
  export type ClaseSocioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaseSocio
     */
    select?: ClaseSocioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClaseSocio
     */
    omit?: ClaseSocioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaseSocioInclude<ExtArgs> | null
    /**
     * Filter, which ClaseSocio to fetch.
     */
    where?: ClaseSocioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClaseSocios to fetch.
     */
    orderBy?: ClaseSocioOrderByWithRelationInput | ClaseSocioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClaseSocios.
     */
    cursor?: ClaseSocioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClaseSocios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClaseSocios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClaseSocios.
     */
    distinct?: ClaseSocioScalarFieldEnum | ClaseSocioScalarFieldEnum[]
  }

  /**
   * ClaseSocio findFirstOrThrow
   */
  export type ClaseSocioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaseSocio
     */
    select?: ClaseSocioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClaseSocio
     */
    omit?: ClaseSocioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaseSocioInclude<ExtArgs> | null
    /**
     * Filter, which ClaseSocio to fetch.
     */
    where?: ClaseSocioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClaseSocios to fetch.
     */
    orderBy?: ClaseSocioOrderByWithRelationInput | ClaseSocioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClaseSocios.
     */
    cursor?: ClaseSocioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClaseSocios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClaseSocios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClaseSocios.
     */
    distinct?: ClaseSocioScalarFieldEnum | ClaseSocioScalarFieldEnum[]
  }

  /**
   * ClaseSocio findMany
   */
  export type ClaseSocioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaseSocio
     */
    select?: ClaseSocioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClaseSocio
     */
    omit?: ClaseSocioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaseSocioInclude<ExtArgs> | null
    /**
     * Filter, which ClaseSocios to fetch.
     */
    where?: ClaseSocioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClaseSocios to fetch.
     */
    orderBy?: ClaseSocioOrderByWithRelationInput | ClaseSocioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClaseSocios.
     */
    cursor?: ClaseSocioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClaseSocios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClaseSocios.
     */
    skip?: number
    distinct?: ClaseSocioScalarFieldEnum | ClaseSocioScalarFieldEnum[]
  }

  /**
   * ClaseSocio create
   */
  export type ClaseSocioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaseSocio
     */
    select?: ClaseSocioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClaseSocio
     */
    omit?: ClaseSocioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaseSocioInclude<ExtArgs> | null
    /**
     * The data needed to create a ClaseSocio.
     */
    data: XOR<ClaseSocioCreateInput, ClaseSocioUncheckedCreateInput>
  }

  /**
   * ClaseSocio createMany
   */
  export type ClaseSocioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClaseSocios.
     */
    data: ClaseSocioCreateManyInput | ClaseSocioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClaseSocio createManyAndReturn
   */
  export type ClaseSocioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaseSocio
     */
    select?: ClaseSocioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClaseSocio
     */
    omit?: ClaseSocioOmit<ExtArgs> | null
    /**
     * The data used to create many ClaseSocios.
     */
    data: ClaseSocioCreateManyInput | ClaseSocioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaseSocioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClaseSocio update
   */
  export type ClaseSocioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaseSocio
     */
    select?: ClaseSocioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClaseSocio
     */
    omit?: ClaseSocioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaseSocioInclude<ExtArgs> | null
    /**
     * The data needed to update a ClaseSocio.
     */
    data: XOR<ClaseSocioUpdateInput, ClaseSocioUncheckedUpdateInput>
    /**
     * Choose, which ClaseSocio to update.
     */
    where: ClaseSocioWhereUniqueInput
  }

  /**
   * ClaseSocio updateMany
   */
  export type ClaseSocioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClaseSocios.
     */
    data: XOR<ClaseSocioUpdateManyMutationInput, ClaseSocioUncheckedUpdateManyInput>
    /**
     * Filter which ClaseSocios to update
     */
    where?: ClaseSocioWhereInput
    /**
     * Limit how many ClaseSocios to update.
     */
    limit?: number
  }

  /**
   * ClaseSocio updateManyAndReturn
   */
  export type ClaseSocioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaseSocio
     */
    select?: ClaseSocioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClaseSocio
     */
    omit?: ClaseSocioOmit<ExtArgs> | null
    /**
     * The data used to update ClaseSocios.
     */
    data: XOR<ClaseSocioUpdateManyMutationInput, ClaseSocioUncheckedUpdateManyInput>
    /**
     * Filter which ClaseSocios to update
     */
    where?: ClaseSocioWhereInput
    /**
     * Limit how many ClaseSocios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaseSocioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClaseSocio upsert
   */
  export type ClaseSocioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaseSocio
     */
    select?: ClaseSocioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClaseSocio
     */
    omit?: ClaseSocioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaseSocioInclude<ExtArgs> | null
    /**
     * The filter to search for the ClaseSocio to update in case it exists.
     */
    where: ClaseSocioWhereUniqueInput
    /**
     * In case the ClaseSocio found by the `where` argument doesn't exist, create a new ClaseSocio with this data.
     */
    create: XOR<ClaseSocioCreateInput, ClaseSocioUncheckedCreateInput>
    /**
     * In case the ClaseSocio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClaseSocioUpdateInput, ClaseSocioUncheckedUpdateInput>
  }

  /**
   * ClaseSocio delete
   */
  export type ClaseSocioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaseSocio
     */
    select?: ClaseSocioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClaseSocio
     */
    omit?: ClaseSocioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaseSocioInclude<ExtArgs> | null
    /**
     * Filter which ClaseSocio to delete.
     */
    where: ClaseSocioWhereUniqueInput
  }

  /**
   * ClaseSocio deleteMany
   */
  export type ClaseSocioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClaseSocios to delete
     */
    where?: ClaseSocioWhereInput
    /**
     * Limit how many ClaseSocios to delete.
     */
    limit?: number
  }

  /**
   * ClaseSocio without action
   */
  export type ClaseSocioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaseSocio
     */
    select?: ClaseSocioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClaseSocio
     */
    omit?: ClaseSocioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaseSocioInclude<ExtArgs> | null
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
    comprobanteUrl: 'comprobanteUrl',
    formaDePago: 'formaDePago'
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


  export const ActividadScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    monto: 'monto',
    activo: 'activo',
    createdAt: 'createdAt'
  };

  export type ActividadScalarFieldEnum = (typeof ActividadScalarFieldEnum)[keyof typeof ActividadScalarFieldEnum]


  export const ClaseScalarFieldEnum: {
    id: 'id',
    diaSemana: 'diaSemana',
    horaInicio: 'horaInicio',
    horaFin: 'horaFin',
    activo: 'activo',
    actividadId: 'actividadId',
    profesorId: 'profesorId',
    createdAt: 'createdAt'
  };

  export type ClaseScalarFieldEnum = (typeof ClaseScalarFieldEnum)[keyof typeof ClaseScalarFieldEnum]


  export const CuotaScalarFieldEnum: {
    id: 'id',
    fecha_pago: 'fecha_pago',
    metodo_pago: 'metodo_pago',
    monto: 'monto',
    estado: 'estado',
    created_at: 'created_at',
    socio_id: 'socio_id',
    actividad_id: 'actividad_id',
    mes: 'mes'
  };

  export type CuotaScalarFieldEnum = (typeof CuotaScalarFieldEnum)[keyof typeof CuotaScalarFieldEnum]


  export const ComprobanteScalarFieldEnum: {
    id: 'id',
    cuotaId: 'cuotaId',
    url: 'url',
    activo: 'activo',
    subido_en: 'subido_en'
  };

  export type ComprobanteScalarFieldEnum = (typeof ComprobanteScalarFieldEnum)[keyof typeof ComprobanteScalarFieldEnum]


  export const ProfesorScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    apellido: 'apellido',
    email: 'email',
    activo: 'activo',
    createdAt: 'createdAt'
  };

  export type ProfesorScalarFieldEnum = (typeof ProfesorScalarFieldEnum)[keyof typeof ProfesorScalarFieldEnum]


  export const ClaseSocioScalarFieldEnum: {
    id: 'id',
    claseId: 'claseId',
    socioId: 'socioId'
  };

  export type ClaseSocioScalarFieldEnum = (typeof ClaseSocioScalarFieldEnum)[keyof typeof ClaseSocioScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DiaSemana'
   */
  export type EnumDiaSemanaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DiaSemana'>
    


  /**
   * Reference to a field of type 'DiaSemana[]'
   */
  export type ListEnumDiaSemanaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DiaSemana[]'>
    


  /**
   * Reference to a field of type 'forma_de_pago'
   */
  export type Enumforma_de_pagoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'forma_de_pago'>
    


  /**
   * Reference to a field of type 'forma_de_pago[]'
   */
  export type ListEnumforma_de_pagoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'forma_de_pago[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'estado_cuota'
   */
  export type Enumestado_cuotaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'estado_cuota'>
    


  /**
   * Reference to a field of type 'estado_cuota[]'
   */
  export type ListEnumestado_cuotaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'estado_cuota[]'>
    


  /**
   * Reference to a field of type 'Mes'
   */
  export type EnumMesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Mes'>
    


  /**
   * Reference to a field of type 'Mes[]'
   */
  export type ListEnumMesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Mes[]'>
    
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
    comprobanteUrl?: StringNullableFilter<"Entrada"> | string | null
    formaDePago?: EnumFormaDePagoFilter<"Entrada"> | $Enums.FormaDePago
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
    comprobanteUrl?: SortOrderInput | SortOrder
    formaDePago?: SortOrder
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
    comprobanteUrl?: StringNullableFilter<"Entrada"> | string | null
    formaDePago?: EnumFormaDePagoFilter<"Entrada"> | $Enums.FormaDePago
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
    comprobanteUrl?: SortOrderInput | SortOrder
    formaDePago?: SortOrder
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
    comprobanteUrl?: StringNullableWithAggregatesFilter<"Entrada"> | string | null
    formaDePago?: EnumFormaDePagoWithAggregatesFilter<"Entrada"> | $Enums.FormaDePago
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
    ClaseSocio?: ClaseSocioListRelationFilter
    Cuota?: CuotaListRelationFilter
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
    ClaseSocio?: ClaseSocioOrderByRelationAggregateInput
    Cuota?: CuotaOrderByRelationAggregateInput
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
    ClaseSocio?: ClaseSocioListRelationFilter
    Cuota?: CuotaListRelationFilter
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

  export type ActividadWhereInput = {
    AND?: ActividadWhereInput | ActividadWhereInput[]
    OR?: ActividadWhereInput[]
    NOT?: ActividadWhereInput | ActividadWhereInput[]
    id?: IntFilter<"Actividad"> | number
    nombre?: StringFilter<"Actividad"> | string
    monto?: FloatFilter<"Actividad"> | number
    activo?: BoolFilter<"Actividad"> | boolean
    createdAt?: DateTimeFilter<"Actividad"> | Date | string
    clases?: ClaseListRelationFilter
    Cuota?: CuotaListRelationFilter
  }

  export type ActividadOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    monto?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    clases?: ClaseOrderByRelationAggregateInput
    Cuota?: CuotaOrderByRelationAggregateInput
  }

  export type ActividadWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ActividadWhereInput | ActividadWhereInput[]
    OR?: ActividadWhereInput[]
    NOT?: ActividadWhereInput | ActividadWhereInput[]
    nombre?: StringFilter<"Actividad"> | string
    monto?: FloatFilter<"Actividad"> | number
    activo?: BoolFilter<"Actividad"> | boolean
    createdAt?: DateTimeFilter<"Actividad"> | Date | string
    clases?: ClaseListRelationFilter
    Cuota?: CuotaListRelationFilter
  }, "id">

  export type ActividadOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    monto?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    _count?: ActividadCountOrderByAggregateInput
    _avg?: ActividadAvgOrderByAggregateInput
    _max?: ActividadMaxOrderByAggregateInput
    _min?: ActividadMinOrderByAggregateInput
    _sum?: ActividadSumOrderByAggregateInput
  }

  export type ActividadScalarWhereWithAggregatesInput = {
    AND?: ActividadScalarWhereWithAggregatesInput | ActividadScalarWhereWithAggregatesInput[]
    OR?: ActividadScalarWhereWithAggregatesInput[]
    NOT?: ActividadScalarWhereWithAggregatesInput | ActividadScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Actividad"> | number
    nombre?: StringWithAggregatesFilter<"Actividad"> | string
    monto?: FloatWithAggregatesFilter<"Actividad"> | number
    activo?: BoolWithAggregatesFilter<"Actividad"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Actividad"> | Date | string
  }

  export type ClaseWhereInput = {
    AND?: ClaseWhereInput | ClaseWhereInput[]
    OR?: ClaseWhereInput[]
    NOT?: ClaseWhereInput | ClaseWhereInput[]
    id?: IntFilter<"Clase"> | number
    diaSemana?: EnumDiaSemanaFilter<"Clase"> | $Enums.DiaSemana
    horaInicio?: StringFilter<"Clase"> | string
    horaFin?: StringFilter<"Clase"> | string
    activo?: BoolFilter<"Clase"> | boolean
    actividadId?: IntFilter<"Clase"> | number
    profesorId?: IntNullableFilter<"Clase"> | number | null
    createdAt?: DateTimeFilter<"Clase"> | Date | string
    actividad?: XOR<ActividadScalarRelationFilter, ActividadWhereInput>
    profesor?: XOR<ProfesorNullableScalarRelationFilter, ProfesorWhereInput> | null
    ClaseSocio?: ClaseSocioListRelationFilter
  }

  export type ClaseOrderByWithRelationInput = {
    id?: SortOrder
    diaSemana?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrder
    activo?: SortOrder
    actividadId?: SortOrder
    profesorId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    actividad?: ActividadOrderByWithRelationInput
    profesor?: ProfesorOrderByWithRelationInput
    ClaseSocio?: ClaseSocioOrderByRelationAggregateInput
  }

  export type ClaseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ClaseWhereInput | ClaseWhereInput[]
    OR?: ClaseWhereInput[]
    NOT?: ClaseWhereInput | ClaseWhereInput[]
    diaSemana?: EnumDiaSemanaFilter<"Clase"> | $Enums.DiaSemana
    horaInicio?: StringFilter<"Clase"> | string
    horaFin?: StringFilter<"Clase"> | string
    activo?: BoolFilter<"Clase"> | boolean
    actividadId?: IntFilter<"Clase"> | number
    profesorId?: IntNullableFilter<"Clase"> | number | null
    createdAt?: DateTimeFilter<"Clase"> | Date | string
    actividad?: XOR<ActividadScalarRelationFilter, ActividadWhereInput>
    profesor?: XOR<ProfesorNullableScalarRelationFilter, ProfesorWhereInput> | null
    ClaseSocio?: ClaseSocioListRelationFilter
  }, "id">

  export type ClaseOrderByWithAggregationInput = {
    id?: SortOrder
    diaSemana?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrder
    activo?: SortOrder
    actividadId?: SortOrder
    profesorId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ClaseCountOrderByAggregateInput
    _avg?: ClaseAvgOrderByAggregateInput
    _max?: ClaseMaxOrderByAggregateInput
    _min?: ClaseMinOrderByAggregateInput
    _sum?: ClaseSumOrderByAggregateInput
  }

  export type ClaseScalarWhereWithAggregatesInput = {
    AND?: ClaseScalarWhereWithAggregatesInput | ClaseScalarWhereWithAggregatesInput[]
    OR?: ClaseScalarWhereWithAggregatesInput[]
    NOT?: ClaseScalarWhereWithAggregatesInput | ClaseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Clase"> | number
    diaSemana?: EnumDiaSemanaWithAggregatesFilter<"Clase"> | $Enums.DiaSemana
    horaInicio?: StringWithAggregatesFilter<"Clase"> | string
    horaFin?: StringWithAggregatesFilter<"Clase"> | string
    activo?: BoolWithAggregatesFilter<"Clase"> | boolean
    actividadId?: IntWithAggregatesFilter<"Clase"> | number
    profesorId?: IntNullableWithAggregatesFilter<"Clase"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Clase"> | Date | string
  }

  export type CuotaWhereInput = {
    AND?: CuotaWhereInput | CuotaWhereInput[]
    OR?: CuotaWhereInput[]
    NOT?: CuotaWhereInput | CuotaWhereInput[]
    id?: IntFilter<"Cuota"> | number
    fecha_pago?: DateTimeNullableFilter<"Cuota"> | Date | string | null
    metodo_pago?: Enumforma_de_pagoFilter<"Cuota"> | $Enums.forma_de_pago
    monto?: DecimalFilter<"Cuota"> | Decimal | DecimalJsLike | number | string
    estado?: Enumestado_cuotaFilter<"Cuota"> | $Enums.estado_cuota
    created_at?: DateTimeFilter<"Cuota"> | Date | string
    socio_id?: IntFilter<"Cuota"> | number
    actividad_id?: IntFilter<"Cuota"> | number
    mes?: EnumMesNullableFilter<"Cuota"> | $Enums.Mes | null
    Comprobante?: ComprobanteListRelationFilter
    Actividad?: XOR<ActividadScalarRelationFilter, ActividadWhereInput>
    Socio?: XOR<SocioScalarRelationFilter, SocioWhereInput>
  }

  export type CuotaOrderByWithRelationInput = {
    id?: SortOrder
    fecha_pago?: SortOrderInput | SortOrder
    metodo_pago?: SortOrder
    monto?: SortOrder
    estado?: SortOrder
    created_at?: SortOrder
    socio_id?: SortOrder
    actividad_id?: SortOrder
    mes?: SortOrderInput | SortOrder
    Comprobante?: ComprobanteOrderByRelationAggregateInput
    Actividad?: ActividadOrderByWithRelationInput
    Socio?: SocioOrderByWithRelationInput
  }

  export type CuotaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CuotaWhereInput | CuotaWhereInput[]
    OR?: CuotaWhereInput[]
    NOT?: CuotaWhereInput | CuotaWhereInput[]
    fecha_pago?: DateTimeNullableFilter<"Cuota"> | Date | string | null
    metodo_pago?: Enumforma_de_pagoFilter<"Cuota"> | $Enums.forma_de_pago
    monto?: DecimalFilter<"Cuota"> | Decimal | DecimalJsLike | number | string
    estado?: Enumestado_cuotaFilter<"Cuota"> | $Enums.estado_cuota
    created_at?: DateTimeFilter<"Cuota"> | Date | string
    socio_id?: IntFilter<"Cuota"> | number
    actividad_id?: IntFilter<"Cuota"> | number
    mes?: EnumMesNullableFilter<"Cuota"> | $Enums.Mes | null
    Comprobante?: ComprobanteListRelationFilter
    Actividad?: XOR<ActividadScalarRelationFilter, ActividadWhereInput>
    Socio?: XOR<SocioScalarRelationFilter, SocioWhereInput>
  }, "id">

  export type CuotaOrderByWithAggregationInput = {
    id?: SortOrder
    fecha_pago?: SortOrderInput | SortOrder
    metodo_pago?: SortOrder
    monto?: SortOrder
    estado?: SortOrder
    created_at?: SortOrder
    socio_id?: SortOrder
    actividad_id?: SortOrder
    mes?: SortOrderInput | SortOrder
    _count?: CuotaCountOrderByAggregateInput
    _avg?: CuotaAvgOrderByAggregateInput
    _max?: CuotaMaxOrderByAggregateInput
    _min?: CuotaMinOrderByAggregateInput
    _sum?: CuotaSumOrderByAggregateInput
  }

  export type CuotaScalarWhereWithAggregatesInput = {
    AND?: CuotaScalarWhereWithAggregatesInput | CuotaScalarWhereWithAggregatesInput[]
    OR?: CuotaScalarWhereWithAggregatesInput[]
    NOT?: CuotaScalarWhereWithAggregatesInput | CuotaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cuota"> | number
    fecha_pago?: DateTimeNullableWithAggregatesFilter<"Cuota"> | Date | string | null
    metodo_pago?: Enumforma_de_pagoWithAggregatesFilter<"Cuota"> | $Enums.forma_de_pago
    monto?: DecimalWithAggregatesFilter<"Cuota"> | Decimal | DecimalJsLike | number | string
    estado?: Enumestado_cuotaWithAggregatesFilter<"Cuota"> | $Enums.estado_cuota
    created_at?: DateTimeWithAggregatesFilter<"Cuota"> | Date | string
    socio_id?: IntWithAggregatesFilter<"Cuota"> | number
    actividad_id?: IntWithAggregatesFilter<"Cuota"> | number
    mes?: EnumMesNullableWithAggregatesFilter<"Cuota"> | $Enums.Mes | null
  }

  export type ComprobanteWhereInput = {
    AND?: ComprobanteWhereInput | ComprobanteWhereInput[]
    OR?: ComprobanteWhereInput[]
    NOT?: ComprobanteWhereInput | ComprobanteWhereInput[]
    id?: IntFilter<"Comprobante"> | number
    cuotaId?: IntFilter<"Comprobante"> | number
    url?: StringFilter<"Comprobante"> | string
    activo?: BoolFilter<"Comprobante"> | boolean
    subido_en?: DateTimeFilter<"Comprobante"> | Date | string
    Cuota?: XOR<CuotaScalarRelationFilter, CuotaWhereInput>
  }

  export type ComprobanteOrderByWithRelationInput = {
    id?: SortOrder
    cuotaId?: SortOrder
    url?: SortOrder
    activo?: SortOrder
    subido_en?: SortOrder
    Cuota?: CuotaOrderByWithRelationInput
  }

  export type ComprobanteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cuotaId_activo?: ComprobanteCuotaIdActivoCompoundUniqueInput
    AND?: ComprobanteWhereInput | ComprobanteWhereInput[]
    OR?: ComprobanteWhereInput[]
    NOT?: ComprobanteWhereInput | ComprobanteWhereInput[]
    cuotaId?: IntFilter<"Comprobante"> | number
    url?: StringFilter<"Comprobante"> | string
    activo?: BoolFilter<"Comprobante"> | boolean
    subido_en?: DateTimeFilter<"Comprobante"> | Date | string
    Cuota?: XOR<CuotaScalarRelationFilter, CuotaWhereInput>
  }, "id" | "cuotaId_activo">

  export type ComprobanteOrderByWithAggregationInput = {
    id?: SortOrder
    cuotaId?: SortOrder
    url?: SortOrder
    activo?: SortOrder
    subido_en?: SortOrder
    _count?: ComprobanteCountOrderByAggregateInput
    _avg?: ComprobanteAvgOrderByAggregateInput
    _max?: ComprobanteMaxOrderByAggregateInput
    _min?: ComprobanteMinOrderByAggregateInput
    _sum?: ComprobanteSumOrderByAggregateInput
  }

  export type ComprobanteScalarWhereWithAggregatesInput = {
    AND?: ComprobanteScalarWhereWithAggregatesInput | ComprobanteScalarWhereWithAggregatesInput[]
    OR?: ComprobanteScalarWhereWithAggregatesInput[]
    NOT?: ComprobanteScalarWhereWithAggregatesInput | ComprobanteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Comprobante"> | number
    cuotaId?: IntWithAggregatesFilter<"Comprobante"> | number
    url?: StringWithAggregatesFilter<"Comprobante"> | string
    activo?: BoolWithAggregatesFilter<"Comprobante"> | boolean
    subido_en?: DateTimeWithAggregatesFilter<"Comprobante"> | Date | string
  }

  export type ProfesorWhereInput = {
    AND?: ProfesorWhereInput | ProfesorWhereInput[]
    OR?: ProfesorWhereInput[]
    NOT?: ProfesorWhereInput | ProfesorWhereInput[]
    id?: IntFilter<"Profesor"> | number
    nombre?: StringFilter<"Profesor"> | string
    apellido?: StringFilter<"Profesor"> | string
    email?: StringFilter<"Profesor"> | string
    activo?: BoolFilter<"Profesor"> | boolean
    createdAt?: DateTimeFilter<"Profesor"> | Date | string
    clases?: ClaseListRelationFilter
  }

  export type ProfesorOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    clases?: ClaseOrderByRelationAggregateInput
  }

  export type ProfesorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: ProfesorWhereInput | ProfesorWhereInput[]
    OR?: ProfesorWhereInput[]
    NOT?: ProfesorWhereInput | ProfesorWhereInput[]
    nombre?: StringFilter<"Profesor"> | string
    apellido?: StringFilter<"Profesor"> | string
    activo?: BoolFilter<"Profesor"> | boolean
    createdAt?: DateTimeFilter<"Profesor"> | Date | string
    clases?: ClaseListRelationFilter
  }, "id" | "email">

  export type ProfesorOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    _count?: ProfesorCountOrderByAggregateInput
    _avg?: ProfesorAvgOrderByAggregateInput
    _max?: ProfesorMaxOrderByAggregateInput
    _min?: ProfesorMinOrderByAggregateInput
    _sum?: ProfesorSumOrderByAggregateInput
  }

  export type ProfesorScalarWhereWithAggregatesInput = {
    AND?: ProfesorScalarWhereWithAggregatesInput | ProfesorScalarWhereWithAggregatesInput[]
    OR?: ProfesorScalarWhereWithAggregatesInput[]
    NOT?: ProfesorScalarWhereWithAggregatesInput | ProfesorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Profesor"> | number
    nombre?: StringWithAggregatesFilter<"Profesor"> | string
    apellido?: StringWithAggregatesFilter<"Profesor"> | string
    email?: StringWithAggregatesFilter<"Profesor"> | string
    activo?: BoolWithAggregatesFilter<"Profesor"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Profesor"> | Date | string
  }

  export type ClaseSocioWhereInput = {
    AND?: ClaseSocioWhereInput | ClaseSocioWhereInput[]
    OR?: ClaseSocioWhereInput[]
    NOT?: ClaseSocioWhereInput | ClaseSocioWhereInput[]
    id?: IntFilter<"ClaseSocio"> | number
    claseId?: IntFilter<"ClaseSocio"> | number
    socioId?: IntFilter<"ClaseSocio"> | number
    Clase?: XOR<ClaseScalarRelationFilter, ClaseWhereInput>
    Socio?: XOR<SocioScalarRelationFilter, SocioWhereInput>
  }

  export type ClaseSocioOrderByWithRelationInput = {
    id?: SortOrder
    claseId?: SortOrder
    socioId?: SortOrder
    Clase?: ClaseOrderByWithRelationInput
    Socio?: SocioOrderByWithRelationInput
  }

  export type ClaseSocioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    claseId_socioId?: ClaseSocioClaseIdSocioIdCompoundUniqueInput
    AND?: ClaseSocioWhereInput | ClaseSocioWhereInput[]
    OR?: ClaseSocioWhereInput[]
    NOT?: ClaseSocioWhereInput | ClaseSocioWhereInput[]
    claseId?: IntFilter<"ClaseSocio"> | number
    socioId?: IntFilter<"ClaseSocio"> | number
    Clase?: XOR<ClaseScalarRelationFilter, ClaseWhereInput>
    Socio?: XOR<SocioScalarRelationFilter, SocioWhereInput>
  }, "id" | "claseId_socioId">

  export type ClaseSocioOrderByWithAggregationInput = {
    id?: SortOrder
    claseId?: SortOrder
    socioId?: SortOrder
    _count?: ClaseSocioCountOrderByAggregateInput
    _avg?: ClaseSocioAvgOrderByAggregateInput
    _max?: ClaseSocioMaxOrderByAggregateInput
    _min?: ClaseSocioMinOrderByAggregateInput
    _sum?: ClaseSocioSumOrderByAggregateInput
  }

  export type ClaseSocioScalarWhereWithAggregatesInput = {
    AND?: ClaseSocioScalarWhereWithAggregatesInput | ClaseSocioScalarWhereWithAggregatesInput[]
    OR?: ClaseSocioScalarWhereWithAggregatesInput[]
    NOT?: ClaseSocioScalarWhereWithAggregatesInput | ClaseSocioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ClaseSocio"> | number
    claseId?: IntWithAggregatesFilter<"ClaseSocio"> | number
    socioId?: IntWithAggregatesFilter<"ClaseSocio"> | number
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
    comprobanteUrl?: string | null
    formaDePago?: $Enums.FormaDePago
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
    comprobanteUrl?: string | null
    formaDePago?: $Enums.FormaDePago
  }

  export type EntradaUpdateInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    fechaCompra?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comprobanteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    formaDePago?: EnumFormaDePagoFieldUpdateOperationsInput | $Enums.FormaDePago
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
    comprobanteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    formaDePago?: EnumFormaDePagoFieldUpdateOperationsInput | $Enums.FormaDePago
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
    comprobanteUrl?: string | null
    formaDePago?: $Enums.FormaDePago
  }

  export type EntradaUpdateManyMutationInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    fechaCompra?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comprobanteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    formaDePago?: EnumFormaDePagoFieldUpdateOperationsInput | $Enums.FormaDePago
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
    comprobanteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    formaDePago?: EnumFormaDePagoFieldUpdateOperationsInput | $Enums.FormaDePago
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
    ClaseSocio?: ClaseSocioCreateNestedManyWithoutSocioInput
    Cuota?: CuotaCreateNestedManyWithoutSocioInput
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
    ClaseSocio?: ClaseSocioUncheckedCreateNestedManyWithoutSocioInput
    Cuota?: CuotaUncheckedCreateNestedManyWithoutSocioInput
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
    ClaseSocio?: ClaseSocioUpdateManyWithoutSocioNestedInput
    Cuota?: CuotaUpdateManyWithoutSocioNestedInput
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
    ClaseSocio?: ClaseSocioUncheckedUpdateManyWithoutSocioNestedInput
    Cuota?: CuotaUncheckedUpdateManyWithoutSocioNestedInput
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

  export type ActividadCreateInput = {
    nombre: string
    monto: number
    activo?: boolean
    createdAt?: Date | string
    clases?: ClaseCreateNestedManyWithoutActividadInput
    Cuota?: CuotaCreateNestedManyWithoutActividadInput
  }

  export type ActividadUncheckedCreateInput = {
    id?: number
    nombre: string
    monto: number
    activo?: boolean
    createdAt?: Date | string
    clases?: ClaseUncheckedCreateNestedManyWithoutActividadInput
    Cuota?: CuotaUncheckedCreateNestedManyWithoutActividadInput
  }

  export type ActividadUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    monto?: FloatFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clases?: ClaseUpdateManyWithoutActividadNestedInput
    Cuota?: CuotaUpdateManyWithoutActividadNestedInput
  }

  export type ActividadUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    monto?: FloatFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clases?: ClaseUncheckedUpdateManyWithoutActividadNestedInput
    Cuota?: CuotaUncheckedUpdateManyWithoutActividadNestedInput
  }

  export type ActividadCreateManyInput = {
    id?: number
    nombre: string
    monto: number
    activo?: boolean
    createdAt?: Date | string
  }

  export type ActividadUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    monto?: FloatFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActividadUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    monto?: FloatFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClaseCreateInput = {
    diaSemana: $Enums.DiaSemana
    horaInicio: string
    horaFin: string
    activo?: boolean
    createdAt?: Date | string
    actividad: ActividadCreateNestedOneWithoutClasesInput
    profesor?: ProfesorCreateNestedOneWithoutClasesInput
    ClaseSocio?: ClaseSocioCreateNestedManyWithoutClaseInput
  }

  export type ClaseUncheckedCreateInput = {
    id?: number
    diaSemana: $Enums.DiaSemana
    horaInicio: string
    horaFin: string
    activo?: boolean
    actividadId: number
    profesorId?: number | null
    createdAt?: Date | string
    ClaseSocio?: ClaseSocioUncheckedCreateNestedManyWithoutClaseInput
  }

  export type ClaseUpdateInput = {
    diaSemana?: EnumDiaSemanaFieldUpdateOperationsInput | $Enums.DiaSemana
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    actividad?: ActividadUpdateOneRequiredWithoutClasesNestedInput
    profesor?: ProfesorUpdateOneWithoutClasesNestedInput
    ClaseSocio?: ClaseSocioUpdateManyWithoutClaseNestedInput
  }

  export type ClaseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    diaSemana?: EnumDiaSemanaFieldUpdateOperationsInput | $Enums.DiaSemana
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    actividadId?: IntFieldUpdateOperationsInput | number
    profesorId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ClaseSocio?: ClaseSocioUncheckedUpdateManyWithoutClaseNestedInput
  }

  export type ClaseCreateManyInput = {
    id?: number
    diaSemana: $Enums.DiaSemana
    horaInicio: string
    horaFin: string
    activo?: boolean
    actividadId: number
    profesorId?: number | null
    createdAt?: Date | string
  }

  export type ClaseUpdateManyMutationInput = {
    diaSemana?: EnumDiaSemanaFieldUpdateOperationsInput | $Enums.DiaSemana
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClaseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    diaSemana?: EnumDiaSemanaFieldUpdateOperationsInput | $Enums.DiaSemana
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    actividadId?: IntFieldUpdateOperationsInput | number
    profesorId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CuotaCreateInput = {
    fecha_pago?: Date | string | null
    metodo_pago: $Enums.forma_de_pago
    monto: Decimal | DecimalJsLike | number | string
    estado?: $Enums.estado_cuota
    created_at?: Date | string
    mes?: $Enums.Mes | null
    Comprobante?: ComprobanteCreateNestedManyWithoutCuotaInput
    Actividad: ActividadCreateNestedOneWithoutCuotaInput
    Socio: SocioCreateNestedOneWithoutCuotaInput
  }

  export type CuotaUncheckedCreateInput = {
    id?: number
    fecha_pago?: Date | string | null
    metodo_pago: $Enums.forma_de_pago
    monto: Decimal | DecimalJsLike | number | string
    estado?: $Enums.estado_cuota
    created_at?: Date | string
    socio_id: number
    actividad_id: number
    mes?: $Enums.Mes | null
    Comprobante?: ComprobanteUncheckedCreateNestedManyWithoutCuotaInput
  }

  export type CuotaUpdateInput = {
    fecha_pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metodo_pago?: Enumforma_de_pagoFieldUpdateOperationsInput | $Enums.forma_de_pago
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: Enumestado_cuotaFieldUpdateOperationsInput | $Enums.estado_cuota
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    mes?: NullableEnumMesFieldUpdateOperationsInput | $Enums.Mes | null
    Comprobante?: ComprobanteUpdateManyWithoutCuotaNestedInput
    Actividad?: ActividadUpdateOneRequiredWithoutCuotaNestedInput
    Socio?: SocioUpdateOneRequiredWithoutCuotaNestedInput
  }

  export type CuotaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha_pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metodo_pago?: Enumforma_de_pagoFieldUpdateOperationsInput | $Enums.forma_de_pago
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: Enumestado_cuotaFieldUpdateOperationsInput | $Enums.estado_cuota
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    socio_id?: IntFieldUpdateOperationsInput | number
    actividad_id?: IntFieldUpdateOperationsInput | number
    mes?: NullableEnumMesFieldUpdateOperationsInput | $Enums.Mes | null
    Comprobante?: ComprobanteUncheckedUpdateManyWithoutCuotaNestedInput
  }

  export type CuotaCreateManyInput = {
    id?: number
    fecha_pago?: Date | string | null
    metodo_pago: $Enums.forma_de_pago
    monto: Decimal | DecimalJsLike | number | string
    estado?: $Enums.estado_cuota
    created_at?: Date | string
    socio_id: number
    actividad_id: number
    mes?: $Enums.Mes | null
  }

  export type CuotaUpdateManyMutationInput = {
    fecha_pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metodo_pago?: Enumforma_de_pagoFieldUpdateOperationsInput | $Enums.forma_de_pago
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: Enumestado_cuotaFieldUpdateOperationsInput | $Enums.estado_cuota
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    mes?: NullableEnumMesFieldUpdateOperationsInput | $Enums.Mes | null
  }

  export type CuotaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha_pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metodo_pago?: Enumforma_de_pagoFieldUpdateOperationsInput | $Enums.forma_de_pago
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: Enumestado_cuotaFieldUpdateOperationsInput | $Enums.estado_cuota
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    socio_id?: IntFieldUpdateOperationsInput | number
    actividad_id?: IntFieldUpdateOperationsInput | number
    mes?: NullableEnumMesFieldUpdateOperationsInput | $Enums.Mes | null
  }

  export type ComprobanteCreateInput = {
    url: string
    activo?: boolean
    subido_en?: Date | string
    Cuota: CuotaCreateNestedOneWithoutComprobanteInput
  }

  export type ComprobanteUncheckedCreateInput = {
    id?: number
    cuotaId: number
    url: string
    activo?: boolean
    subido_en?: Date | string
  }

  export type ComprobanteUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    subido_en?: DateTimeFieldUpdateOperationsInput | Date | string
    Cuota?: CuotaUpdateOneRequiredWithoutComprobanteNestedInput
  }

  export type ComprobanteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cuotaId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    subido_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComprobanteCreateManyInput = {
    id?: number
    cuotaId: number
    url: string
    activo?: boolean
    subido_en?: Date | string
  }

  export type ComprobanteUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    subido_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComprobanteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cuotaId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    subido_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfesorCreateInput = {
    nombre: string
    apellido: string
    email: string
    activo?: boolean
    createdAt?: Date | string
    clases?: ClaseCreateNestedManyWithoutProfesorInput
  }

  export type ProfesorUncheckedCreateInput = {
    id?: number
    nombre: string
    apellido: string
    email: string
    activo?: boolean
    createdAt?: Date | string
    clases?: ClaseUncheckedCreateNestedManyWithoutProfesorInput
  }

  export type ProfesorUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clases?: ClaseUpdateManyWithoutProfesorNestedInput
  }

  export type ProfesorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clases?: ClaseUncheckedUpdateManyWithoutProfesorNestedInput
  }

  export type ProfesorCreateManyInput = {
    id?: number
    nombre: string
    apellido: string
    email: string
    activo?: boolean
    createdAt?: Date | string
  }

  export type ProfesorUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfesorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClaseSocioCreateInput = {
    Clase: ClaseCreateNestedOneWithoutClaseSocioInput
    Socio: SocioCreateNestedOneWithoutClaseSocioInput
  }

  export type ClaseSocioUncheckedCreateInput = {
    id?: number
    claseId: number
    socioId: number
  }

  export type ClaseSocioUpdateInput = {
    Clase?: ClaseUpdateOneRequiredWithoutClaseSocioNestedInput
    Socio?: SocioUpdateOneRequiredWithoutClaseSocioNestedInput
  }

  export type ClaseSocioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    claseId?: IntFieldUpdateOperationsInput | number
    socioId?: IntFieldUpdateOperationsInput | number
  }

  export type ClaseSocioCreateManyInput = {
    id?: number
    claseId: number
    socioId: number
  }

  export type ClaseSocioUpdateManyMutationInput = {

  }

  export type ClaseSocioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    claseId?: IntFieldUpdateOperationsInput | number
    socioId?: IntFieldUpdateOperationsInput | number
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

  export type EnumFormaDePagoFilter<$PrismaModel = never> = {
    equals?: $Enums.FormaDePago | EnumFormaDePagoFieldRefInput<$PrismaModel>
    in?: $Enums.FormaDePago[] | ListEnumFormaDePagoFieldRefInput<$PrismaModel>
    notIn?: $Enums.FormaDePago[] | ListEnumFormaDePagoFieldRefInput<$PrismaModel>
    not?: NestedEnumFormaDePagoFilter<$PrismaModel> | $Enums.FormaDePago
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
    comprobanteUrl?: SortOrder
    formaDePago?: SortOrder
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
    comprobanteUrl?: SortOrder
    formaDePago?: SortOrder
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
    comprobanteUrl?: SortOrder
    formaDePago?: SortOrder
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

  export type EnumFormaDePagoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FormaDePago | EnumFormaDePagoFieldRefInput<$PrismaModel>
    in?: $Enums.FormaDePago[] | ListEnumFormaDePagoFieldRefInput<$PrismaModel>
    notIn?: $Enums.FormaDePago[] | ListEnumFormaDePagoFieldRefInput<$PrismaModel>
    not?: NestedEnumFormaDePagoWithAggregatesFilter<$PrismaModel> | $Enums.FormaDePago
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFormaDePagoFilter<$PrismaModel>
    _max?: NestedEnumFormaDePagoFilter<$PrismaModel>
  }

  export type EnumSexoFilter<$PrismaModel = never> = {
    equals?: $Enums.Sexo | EnumSexoFieldRefInput<$PrismaModel>
    in?: $Enums.Sexo[] | ListEnumSexoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Sexo[] | ListEnumSexoFieldRefInput<$PrismaModel>
    not?: NestedEnumSexoFilter<$PrismaModel> | $Enums.Sexo
  }

  export type ClaseSocioListRelationFilter = {
    every?: ClaseSocioWhereInput
    some?: ClaseSocioWhereInput
    none?: ClaseSocioWhereInput
  }

  export type CuotaListRelationFilter = {
    every?: CuotaWhereInput
    some?: CuotaWhereInput
    none?: CuotaWhereInput
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type ClaseSocioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CuotaOrderByRelationAggregateInput = {
    _count?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ClaseListRelationFilter = {
    every?: ClaseWhereInput
    some?: ClaseWhereInput
    none?: ClaseWhereInput
  }

  export type ClaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ActividadCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    monto?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
  }

  export type ActividadAvgOrderByAggregateInput = {
    id?: SortOrder
    monto?: SortOrder
  }

  export type ActividadMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    monto?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
  }

  export type ActividadMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    monto?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
  }

  export type ActividadSumOrderByAggregateInput = {
    id?: SortOrder
    monto?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumDiaSemanaFilter<$PrismaModel = never> = {
    equals?: $Enums.DiaSemana | EnumDiaSemanaFieldRefInput<$PrismaModel>
    in?: $Enums.DiaSemana[] | ListEnumDiaSemanaFieldRefInput<$PrismaModel>
    notIn?: $Enums.DiaSemana[] | ListEnumDiaSemanaFieldRefInput<$PrismaModel>
    not?: NestedEnumDiaSemanaFilter<$PrismaModel> | $Enums.DiaSemana
  }

  export type ActividadScalarRelationFilter = {
    is?: ActividadWhereInput
    isNot?: ActividadWhereInput
  }

  export type ProfesorNullableScalarRelationFilter = {
    is?: ProfesorWhereInput | null
    isNot?: ProfesorWhereInput | null
  }

  export type ClaseCountOrderByAggregateInput = {
    id?: SortOrder
    diaSemana?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrder
    activo?: SortOrder
    actividadId?: SortOrder
    profesorId?: SortOrder
    createdAt?: SortOrder
  }

  export type ClaseAvgOrderByAggregateInput = {
    id?: SortOrder
    actividadId?: SortOrder
    profesorId?: SortOrder
  }

  export type ClaseMaxOrderByAggregateInput = {
    id?: SortOrder
    diaSemana?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrder
    activo?: SortOrder
    actividadId?: SortOrder
    profesorId?: SortOrder
    createdAt?: SortOrder
  }

  export type ClaseMinOrderByAggregateInput = {
    id?: SortOrder
    diaSemana?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrder
    activo?: SortOrder
    actividadId?: SortOrder
    profesorId?: SortOrder
    createdAt?: SortOrder
  }

  export type ClaseSumOrderByAggregateInput = {
    id?: SortOrder
    actividadId?: SortOrder
    profesorId?: SortOrder
  }

  export type EnumDiaSemanaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DiaSemana | EnumDiaSemanaFieldRefInput<$PrismaModel>
    in?: $Enums.DiaSemana[] | ListEnumDiaSemanaFieldRefInput<$PrismaModel>
    notIn?: $Enums.DiaSemana[] | ListEnumDiaSemanaFieldRefInput<$PrismaModel>
    not?: NestedEnumDiaSemanaWithAggregatesFilter<$PrismaModel> | $Enums.DiaSemana
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDiaSemanaFilter<$PrismaModel>
    _max?: NestedEnumDiaSemanaFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type Enumforma_de_pagoFilter<$PrismaModel = never> = {
    equals?: $Enums.forma_de_pago | Enumforma_de_pagoFieldRefInput<$PrismaModel>
    in?: $Enums.forma_de_pago[] | ListEnumforma_de_pagoFieldRefInput<$PrismaModel>
    notIn?: $Enums.forma_de_pago[] | ListEnumforma_de_pagoFieldRefInput<$PrismaModel>
    not?: NestedEnumforma_de_pagoFilter<$PrismaModel> | $Enums.forma_de_pago
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type Enumestado_cuotaFilter<$PrismaModel = never> = {
    equals?: $Enums.estado_cuota | Enumestado_cuotaFieldRefInput<$PrismaModel>
    in?: $Enums.estado_cuota[] | ListEnumestado_cuotaFieldRefInput<$PrismaModel>
    notIn?: $Enums.estado_cuota[] | ListEnumestado_cuotaFieldRefInput<$PrismaModel>
    not?: NestedEnumestado_cuotaFilter<$PrismaModel> | $Enums.estado_cuota
  }

  export type EnumMesNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Mes | EnumMesFieldRefInput<$PrismaModel> | null
    in?: $Enums.Mes[] | ListEnumMesFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Mes[] | ListEnumMesFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMesNullableFilter<$PrismaModel> | $Enums.Mes | null
  }

  export type ComprobanteListRelationFilter = {
    every?: ComprobanteWhereInput
    some?: ComprobanteWhereInput
    none?: ComprobanteWhereInput
  }

  export type SocioScalarRelationFilter = {
    is?: SocioWhereInput
    isNot?: SocioWhereInput
  }

  export type ComprobanteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CuotaCountOrderByAggregateInput = {
    id?: SortOrder
    fecha_pago?: SortOrder
    metodo_pago?: SortOrder
    monto?: SortOrder
    estado?: SortOrder
    created_at?: SortOrder
    socio_id?: SortOrder
    actividad_id?: SortOrder
    mes?: SortOrder
  }

  export type CuotaAvgOrderByAggregateInput = {
    id?: SortOrder
    monto?: SortOrder
    socio_id?: SortOrder
    actividad_id?: SortOrder
  }

  export type CuotaMaxOrderByAggregateInput = {
    id?: SortOrder
    fecha_pago?: SortOrder
    metodo_pago?: SortOrder
    monto?: SortOrder
    estado?: SortOrder
    created_at?: SortOrder
    socio_id?: SortOrder
    actividad_id?: SortOrder
    mes?: SortOrder
  }

  export type CuotaMinOrderByAggregateInput = {
    id?: SortOrder
    fecha_pago?: SortOrder
    metodo_pago?: SortOrder
    monto?: SortOrder
    estado?: SortOrder
    created_at?: SortOrder
    socio_id?: SortOrder
    actividad_id?: SortOrder
    mes?: SortOrder
  }

  export type CuotaSumOrderByAggregateInput = {
    id?: SortOrder
    monto?: SortOrder
    socio_id?: SortOrder
    actividad_id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type Enumforma_de_pagoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.forma_de_pago | Enumforma_de_pagoFieldRefInput<$PrismaModel>
    in?: $Enums.forma_de_pago[] | ListEnumforma_de_pagoFieldRefInput<$PrismaModel>
    notIn?: $Enums.forma_de_pago[] | ListEnumforma_de_pagoFieldRefInput<$PrismaModel>
    not?: NestedEnumforma_de_pagoWithAggregatesFilter<$PrismaModel> | $Enums.forma_de_pago
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumforma_de_pagoFilter<$PrismaModel>
    _max?: NestedEnumforma_de_pagoFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type Enumestado_cuotaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.estado_cuota | Enumestado_cuotaFieldRefInput<$PrismaModel>
    in?: $Enums.estado_cuota[] | ListEnumestado_cuotaFieldRefInput<$PrismaModel>
    notIn?: $Enums.estado_cuota[] | ListEnumestado_cuotaFieldRefInput<$PrismaModel>
    not?: NestedEnumestado_cuotaWithAggregatesFilter<$PrismaModel> | $Enums.estado_cuota
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumestado_cuotaFilter<$PrismaModel>
    _max?: NestedEnumestado_cuotaFilter<$PrismaModel>
  }

  export type EnumMesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Mes | EnumMesFieldRefInput<$PrismaModel> | null
    in?: $Enums.Mes[] | ListEnumMesFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Mes[] | ListEnumMesFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMesNullableWithAggregatesFilter<$PrismaModel> | $Enums.Mes | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumMesNullableFilter<$PrismaModel>
    _max?: NestedEnumMesNullableFilter<$PrismaModel>
  }

  export type CuotaScalarRelationFilter = {
    is?: CuotaWhereInput
    isNot?: CuotaWhereInput
  }

  export type ComprobanteCuotaIdActivoCompoundUniqueInput = {
    cuotaId: number
    activo: boolean
  }

  export type ComprobanteCountOrderByAggregateInput = {
    id?: SortOrder
    cuotaId?: SortOrder
    url?: SortOrder
    activo?: SortOrder
    subido_en?: SortOrder
  }

  export type ComprobanteAvgOrderByAggregateInput = {
    id?: SortOrder
    cuotaId?: SortOrder
  }

  export type ComprobanteMaxOrderByAggregateInput = {
    id?: SortOrder
    cuotaId?: SortOrder
    url?: SortOrder
    activo?: SortOrder
    subido_en?: SortOrder
  }

  export type ComprobanteMinOrderByAggregateInput = {
    id?: SortOrder
    cuotaId?: SortOrder
    url?: SortOrder
    activo?: SortOrder
    subido_en?: SortOrder
  }

  export type ComprobanteSumOrderByAggregateInput = {
    id?: SortOrder
    cuotaId?: SortOrder
  }

  export type ProfesorCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
  }

  export type ProfesorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProfesorMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
  }

  export type ProfesorMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
  }

  export type ProfesorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ClaseScalarRelationFilter = {
    is?: ClaseWhereInput
    isNot?: ClaseWhereInput
  }

  export type ClaseSocioClaseIdSocioIdCompoundUniqueInput = {
    claseId: number
    socioId: number
  }

  export type ClaseSocioCountOrderByAggregateInput = {
    id?: SortOrder
    claseId?: SortOrder
    socioId?: SortOrder
  }

  export type ClaseSocioAvgOrderByAggregateInput = {
    id?: SortOrder
    claseId?: SortOrder
    socioId?: SortOrder
  }

  export type ClaseSocioMaxOrderByAggregateInput = {
    id?: SortOrder
    claseId?: SortOrder
    socioId?: SortOrder
  }

  export type ClaseSocioMinOrderByAggregateInput = {
    id?: SortOrder
    claseId?: SortOrder
    socioId?: SortOrder
  }

  export type ClaseSocioSumOrderByAggregateInput = {
    id?: SortOrder
    claseId?: SortOrder
    socioId?: SortOrder
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

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumFormaDePagoFieldUpdateOperationsInput = {
    set?: $Enums.FormaDePago
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

  export type ClaseSocioCreateNestedManyWithoutSocioInput = {
    create?: XOR<ClaseSocioCreateWithoutSocioInput, ClaseSocioUncheckedCreateWithoutSocioInput> | ClaseSocioCreateWithoutSocioInput[] | ClaseSocioUncheckedCreateWithoutSocioInput[]
    connectOrCreate?: ClaseSocioCreateOrConnectWithoutSocioInput | ClaseSocioCreateOrConnectWithoutSocioInput[]
    createMany?: ClaseSocioCreateManySocioInputEnvelope
    connect?: ClaseSocioWhereUniqueInput | ClaseSocioWhereUniqueInput[]
  }

  export type CuotaCreateNestedManyWithoutSocioInput = {
    create?: XOR<CuotaCreateWithoutSocioInput, CuotaUncheckedCreateWithoutSocioInput> | CuotaCreateWithoutSocioInput[] | CuotaUncheckedCreateWithoutSocioInput[]
    connectOrCreate?: CuotaCreateOrConnectWithoutSocioInput | CuotaCreateOrConnectWithoutSocioInput[]
    createMany?: CuotaCreateManySocioInputEnvelope
    connect?: CuotaWhereUniqueInput | CuotaWhereUniqueInput[]
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

  export type ClaseSocioUncheckedCreateNestedManyWithoutSocioInput = {
    create?: XOR<ClaseSocioCreateWithoutSocioInput, ClaseSocioUncheckedCreateWithoutSocioInput> | ClaseSocioCreateWithoutSocioInput[] | ClaseSocioUncheckedCreateWithoutSocioInput[]
    connectOrCreate?: ClaseSocioCreateOrConnectWithoutSocioInput | ClaseSocioCreateOrConnectWithoutSocioInput[]
    createMany?: ClaseSocioCreateManySocioInputEnvelope
    connect?: ClaseSocioWhereUniqueInput | ClaseSocioWhereUniqueInput[]
  }

  export type CuotaUncheckedCreateNestedManyWithoutSocioInput = {
    create?: XOR<CuotaCreateWithoutSocioInput, CuotaUncheckedCreateWithoutSocioInput> | CuotaCreateWithoutSocioInput[] | CuotaUncheckedCreateWithoutSocioInput[]
    connectOrCreate?: CuotaCreateOrConnectWithoutSocioInput | CuotaCreateOrConnectWithoutSocioInput[]
    createMany?: CuotaCreateManySocioInputEnvelope
    connect?: CuotaWhereUniqueInput | CuotaWhereUniqueInput[]
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

  export type ClaseSocioUpdateManyWithoutSocioNestedInput = {
    create?: XOR<ClaseSocioCreateWithoutSocioInput, ClaseSocioUncheckedCreateWithoutSocioInput> | ClaseSocioCreateWithoutSocioInput[] | ClaseSocioUncheckedCreateWithoutSocioInput[]
    connectOrCreate?: ClaseSocioCreateOrConnectWithoutSocioInput | ClaseSocioCreateOrConnectWithoutSocioInput[]
    upsert?: ClaseSocioUpsertWithWhereUniqueWithoutSocioInput | ClaseSocioUpsertWithWhereUniqueWithoutSocioInput[]
    createMany?: ClaseSocioCreateManySocioInputEnvelope
    set?: ClaseSocioWhereUniqueInput | ClaseSocioWhereUniqueInput[]
    disconnect?: ClaseSocioWhereUniqueInput | ClaseSocioWhereUniqueInput[]
    delete?: ClaseSocioWhereUniqueInput | ClaseSocioWhereUniqueInput[]
    connect?: ClaseSocioWhereUniqueInput | ClaseSocioWhereUniqueInput[]
    update?: ClaseSocioUpdateWithWhereUniqueWithoutSocioInput | ClaseSocioUpdateWithWhereUniqueWithoutSocioInput[]
    updateMany?: ClaseSocioUpdateManyWithWhereWithoutSocioInput | ClaseSocioUpdateManyWithWhereWithoutSocioInput[]
    deleteMany?: ClaseSocioScalarWhereInput | ClaseSocioScalarWhereInput[]
  }

  export type CuotaUpdateManyWithoutSocioNestedInput = {
    create?: XOR<CuotaCreateWithoutSocioInput, CuotaUncheckedCreateWithoutSocioInput> | CuotaCreateWithoutSocioInput[] | CuotaUncheckedCreateWithoutSocioInput[]
    connectOrCreate?: CuotaCreateOrConnectWithoutSocioInput | CuotaCreateOrConnectWithoutSocioInput[]
    upsert?: CuotaUpsertWithWhereUniqueWithoutSocioInput | CuotaUpsertWithWhereUniqueWithoutSocioInput[]
    createMany?: CuotaCreateManySocioInputEnvelope
    set?: CuotaWhereUniqueInput | CuotaWhereUniqueInput[]
    disconnect?: CuotaWhereUniqueInput | CuotaWhereUniqueInput[]
    delete?: CuotaWhereUniqueInput | CuotaWhereUniqueInput[]
    connect?: CuotaWhereUniqueInput | CuotaWhereUniqueInput[]
    update?: CuotaUpdateWithWhereUniqueWithoutSocioInput | CuotaUpdateWithWhereUniqueWithoutSocioInput[]
    updateMany?: CuotaUpdateManyWithWhereWithoutSocioInput | CuotaUpdateManyWithWhereWithoutSocioInput[]
    deleteMany?: CuotaScalarWhereInput | CuotaScalarWhereInput[]
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

  export type ClaseSocioUncheckedUpdateManyWithoutSocioNestedInput = {
    create?: XOR<ClaseSocioCreateWithoutSocioInput, ClaseSocioUncheckedCreateWithoutSocioInput> | ClaseSocioCreateWithoutSocioInput[] | ClaseSocioUncheckedCreateWithoutSocioInput[]
    connectOrCreate?: ClaseSocioCreateOrConnectWithoutSocioInput | ClaseSocioCreateOrConnectWithoutSocioInput[]
    upsert?: ClaseSocioUpsertWithWhereUniqueWithoutSocioInput | ClaseSocioUpsertWithWhereUniqueWithoutSocioInput[]
    createMany?: ClaseSocioCreateManySocioInputEnvelope
    set?: ClaseSocioWhereUniqueInput | ClaseSocioWhereUniqueInput[]
    disconnect?: ClaseSocioWhereUniqueInput | ClaseSocioWhereUniqueInput[]
    delete?: ClaseSocioWhereUniqueInput | ClaseSocioWhereUniqueInput[]
    connect?: ClaseSocioWhereUniqueInput | ClaseSocioWhereUniqueInput[]
    update?: ClaseSocioUpdateWithWhereUniqueWithoutSocioInput | ClaseSocioUpdateWithWhereUniqueWithoutSocioInput[]
    updateMany?: ClaseSocioUpdateManyWithWhereWithoutSocioInput | ClaseSocioUpdateManyWithWhereWithoutSocioInput[]
    deleteMany?: ClaseSocioScalarWhereInput | ClaseSocioScalarWhereInput[]
  }

  export type CuotaUncheckedUpdateManyWithoutSocioNestedInput = {
    create?: XOR<CuotaCreateWithoutSocioInput, CuotaUncheckedCreateWithoutSocioInput> | CuotaCreateWithoutSocioInput[] | CuotaUncheckedCreateWithoutSocioInput[]
    connectOrCreate?: CuotaCreateOrConnectWithoutSocioInput | CuotaCreateOrConnectWithoutSocioInput[]
    upsert?: CuotaUpsertWithWhereUniqueWithoutSocioInput | CuotaUpsertWithWhereUniqueWithoutSocioInput[]
    createMany?: CuotaCreateManySocioInputEnvelope
    set?: CuotaWhereUniqueInput | CuotaWhereUniqueInput[]
    disconnect?: CuotaWhereUniqueInput | CuotaWhereUniqueInput[]
    delete?: CuotaWhereUniqueInput | CuotaWhereUniqueInput[]
    connect?: CuotaWhereUniqueInput | CuotaWhereUniqueInput[]
    update?: CuotaUpdateWithWhereUniqueWithoutSocioInput | CuotaUpdateWithWhereUniqueWithoutSocioInput[]
    updateMany?: CuotaUpdateManyWithWhereWithoutSocioInput | CuotaUpdateManyWithWhereWithoutSocioInput[]
    deleteMany?: CuotaScalarWhereInput | CuotaScalarWhereInput[]
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

  export type ClaseCreateNestedManyWithoutActividadInput = {
    create?: XOR<ClaseCreateWithoutActividadInput, ClaseUncheckedCreateWithoutActividadInput> | ClaseCreateWithoutActividadInput[] | ClaseUncheckedCreateWithoutActividadInput[]
    connectOrCreate?: ClaseCreateOrConnectWithoutActividadInput | ClaseCreateOrConnectWithoutActividadInput[]
    createMany?: ClaseCreateManyActividadInputEnvelope
    connect?: ClaseWhereUniqueInput | ClaseWhereUniqueInput[]
  }

  export type CuotaCreateNestedManyWithoutActividadInput = {
    create?: XOR<CuotaCreateWithoutActividadInput, CuotaUncheckedCreateWithoutActividadInput> | CuotaCreateWithoutActividadInput[] | CuotaUncheckedCreateWithoutActividadInput[]
    connectOrCreate?: CuotaCreateOrConnectWithoutActividadInput | CuotaCreateOrConnectWithoutActividadInput[]
    createMany?: CuotaCreateManyActividadInputEnvelope
    connect?: CuotaWhereUniqueInput | CuotaWhereUniqueInput[]
  }

  export type ClaseUncheckedCreateNestedManyWithoutActividadInput = {
    create?: XOR<ClaseCreateWithoutActividadInput, ClaseUncheckedCreateWithoutActividadInput> | ClaseCreateWithoutActividadInput[] | ClaseUncheckedCreateWithoutActividadInput[]
    connectOrCreate?: ClaseCreateOrConnectWithoutActividadInput | ClaseCreateOrConnectWithoutActividadInput[]
    createMany?: ClaseCreateManyActividadInputEnvelope
    connect?: ClaseWhereUniqueInput | ClaseWhereUniqueInput[]
  }

  export type CuotaUncheckedCreateNestedManyWithoutActividadInput = {
    create?: XOR<CuotaCreateWithoutActividadInput, CuotaUncheckedCreateWithoutActividadInput> | CuotaCreateWithoutActividadInput[] | CuotaUncheckedCreateWithoutActividadInput[]
    connectOrCreate?: CuotaCreateOrConnectWithoutActividadInput | CuotaCreateOrConnectWithoutActividadInput[]
    createMany?: CuotaCreateManyActividadInputEnvelope
    connect?: CuotaWhereUniqueInput | CuotaWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ClaseUpdateManyWithoutActividadNestedInput = {
    create?: XOR<ClaseCreateWithoutActividadInput, ClaseUncheckedCreateWithoutActividadInput> | ClaseCreateWithoutActividadInput[] | ClaseUncheckedCreateWithoutActividadInput[]
    connectOrCreate?: ClaseCreateOrConnectWithoutActividadInput | ClaseCreateOrConnectWithoutActividadInput[]
    upsert?: ClaseUpsertWithWhereUniqueWithoutActividadInput | ClaseUpsertWithWhereUniqueWithoutActividadInput[]
    createMany?: ClaseCreateManyActividadInputEnvelope
    set?: ClaseWhereUniqueInput | ClaseWhereUniqueInput[]
    disconnect?: ClaseWhereUniqueInput | ClaseWhereUniqueInput[]
    delete?: ClaseWhereUniqueInput | ClaseWhereUniqueInput[]
    connect?: ClaseWhereUniqueInput | ClaseWhereUniqueInput[]
    update?: ClaseUpdateWithWhereUniqueWithoutActividadInput | ClaseUpdateWithWhereUniqueWithoutActividadInput[]
    updateMany?: ClaseUpdateManyWithWhereWithoutActividadInput | ClaseUpdateManyWithWhereWithoutActividadInput[]
    deleteMany?: ClaseScalarWhereInput | ClaseScalarWhereInput[]
  }

  export type CuotaUpdateManyWithoutActividadNestedInput = {
    create?: XOR<CuotaCreateWithoutActividadInput, CuotaUncheckedCreateWithoutActividadInput> | CuotaCreateWithoutActividadInput[] | CuotaUncheckedCreateWithoutActividadInput[]
    connectOrCreate?: CuotaCreateOrConnectWithoutActividadInput | CuotaCreateOrConnectWithoutActividadInput[]
    upsert?: CuotaUpsertWithWhereUniqueWithoutActividadInput | CuotaUpsertWithWhereUniqueWithoutActividadInput[]
    createMany?: CuotaCreateManyActividadInputEnvelope
    set?: CuotaWhereUniqueInput | CuotaWhereUniqueInput[]
    disconnect?: CuotaWhereUniqueInput | CuotaWhereUniqueInput[]
    delete?: CuotaWhereUniqueInput | CuotaWhereUniqueInput[]
    connect?: CuotaWhereUniqueInput | CuotaWhereUniqueInput[]
    update?: CuotaUpdateWithWhereUniqueWithoutActividadInput | CuotaUpdateWithWhereUniqueWithoutActividadInput[]
    updateMany?: CuotaUpdateManyWithWhereWithoutActividadInput | CuotaUpdateManyWithWhereWithoutActividadInput[]
    deleteMany?: CuotaScalarWhereInput | CuotaScalarWhereInput[]
  }

  export type ClaseUncheckedUpdateManyWithoutActividadNestedInput = {
    create?: XOR<ClaseCreateWithoutActividadInput, ClaseUncheckedCreateWithoutActividadInput> | ClaseCreateWithoutActividadInput[] | ClaseUncheckedCreateWithoutActividadInput[]
    connectOrCreate?: ClaseCreateOrConnectWithoutActividadInput | ClaseCreateOrConnectWithoutActividadInput[]
    upsert?: ClaseUpsertWithWhereUniqueWithoutActividadInput | ClaseUpsertWithWhereUniqueWithoutActividadInput[]
    createMany?: ClaseCreateManyActividadInputEnvelope
    set?: ClaseWhereUniqueInput | ClaseWhereUniqueInput[]
    disconnect?: ClaseWhereUniqueInput | ClaseWhereUniqueInput[]
    delete?: ClaseWhereUniqueInput | ClaseWhereUniqueInput[]
    connect?: ClaseWhereUniqueInput | ClaseWhereUniqueInput[]
    update?: ClaseUpdateWithWhereUniqueWithoutActividadInput | ClaseUpdateWithWhereUniqueWithoutActividadInput[]
    updateMany?: ClaseUpdateManyWithWhereWithoutActividadInput | ClaseUpdateManyWithWhereWithoutActividadInput[]
    deleteMany?: ClaseScalarWhereInput | ClaseScalarWhereInput[]
  }

  export type CuotaUncheckedUpdateManyWithoutActividadNestedInput = {
    create?: XOR<CuotaCreateWithoutActividadInput, CuotaUncheckedCreateWithoutActividadInput> | CuotaCreateWithoutActividadInput[] | CuotaUncheckedCreateWithoutActividadInput[]
    connectOrCreate?: CuotaCreateOrConnectWithoutActividadInput | CuotaCreateOrConnectWithoutActividadInput[]
    upsert?: CuotaUpsertWithWhereUniqueWithoutActividadInput | CuotaUpsertWithWhereUniqueWithoutActividadInput[]
    createMany?: CuotaCreateManyActividadInputEnvelope
    set?: CuotaWhereUniqueInput | CuotaWhereUniqueInput[]
    disconnect?: CuotaWhereUniqueInput | CuotaWhereUniqueInput[]
    delete?: CuotaWhereUniqueInput | CuotaWhereUniqueInput[]
    connect?: CuotaWhereUniqueInput | CuotaWhereUniqueInput[]
    update?: CuotaUpdateWithWhereUniqueWithoutActividadInput | CuotaUpdateWithWhereUniqueWithoutActividadInput[]
    updateMany?: CuotaUpdateManyWithWhereWithoutActividadInput | CuotaUpdateManyWithWhereWithoutActividadInput[]
    deleteMany?: CuotaScalarWhereInput | CuotaScalarWhereInput[]
  }

  export type ActividadCreateNestedOneWithoutClasesInput = {
    create?: XOR<ActividadCreateWithoutClasesInput, ActividadUncheckedCreateWithoutClasesInput>
    connectOrCreate?: ActividadCreateOrConnectWithoutClasesInput
    connect?: ActividadWhereUniqueInput
  }

  export type ProfesorCreateNestedOneWithoutClasesInput = {
    create?: XOR<ProfesorCreateWithoutClasesInput, ProfesorUncheckedCreateWithoutClasesInput>
    connectOrCreate?: ProfesorCreateOrConnectWithoutClasesInput
    connect?: ProfesorWhereUniqueInput
  }

  export type ClaseSocioCreateNestedManyWithoutClaseInput = {
    create?: XOR<ClaseSocioCreateWithoutClaseInput, ClaseSocioUncheckedCreateWithoutClaseInput> | ClaseSocioCreateWithoutClaseInput[] | ClaseSocioUncheckedCreateWithoutClaseInput[]
    connectOrCreate?: ClaseSocioCreateOrConnectWithoutClaseInput | ClaseSocioCreateOrConnectWithoutClaseInput[]
    createMany?: ClaseSocioCreateManyClaseInputEnvelope
    connect?: ClaseSocioWhereUniqueInput | ClaseSocioWhereUniqueInput[]
  }

  export type ClaseSocioUncheckedCreateNestedManyWithoutClaseInput = {
    create?: XOR<ClaseSocioCreateWithoutClaseInput, ClaseSocioUncheckedCreateWithoutClaseInput> | ClaseSocioCreateWithoutClaseInput[] | ClaseSocioUncheckedCreateWithoutClaseInput[]
    connectOrCreate?: ClaseSocioCreateOrConnectWithoutClaseInput | ClaseSocioCreateOrConnectWithoutClaseInput[]
    createMany?: ClaseSocioCreateManyClaseInputEnvelope
    connect?: ClaseSocioWhereUniqueInput | ClaseSocioWhereUniqueInput[]
  }

  export type EnumDiaSemanaFieldUpdateOperationsInput = {
    set?: $Enums.DiaSemana
  }

  export type ActividadUpdateOneRequiredWithoutClasesNestedInput = {
    create?: XOR<ActividadCreateWithoutClasesInput, ActividadUncheckedCreateWithoutClasesInput>
    connectOrCreate?: ActividadCreateOrConnectWithoutClasesInput
    upsert?: ActividadUpsertWithoutClasesInput
    connect?: ActividadWhereUniqueInput
    update?: XOR<XOR<ActividadUpdateToOneWithWhereWithoutClasesInput, ActividadUpdateWithoutClasesInput>, ActividadUncheckedUpdateWithoutClasesInput>
  }

  export type ProfesorUpdateOneWithoutClasesNestedInput = {
    create?: XOR<ProfesorCreateWithoutClasesInput, ProfesorUncheckedCreateWithoutClasesInput>
    connectOrCreate?: ProfesorCreateOrConnectWithoutClasesInput
    upsert?: ProfesorUpsertWithoutClasesInput
    disconnect?: ProfesorWhereInput | boolean
    delete?: ProfesorWhereInput | boolean
    connect?: ProfesorWhereUniqueInput
    update?: XOR<XOR<ProfesorUpdateToOneWithWhereWithoutClasesInput, ProfesorUpdateWithoutClasesInput>, ProfesorUncheckedUpdateWithoutClasesInput>
  }

  export type ClaseSocioUpdateManyWithoutClaseNestedInput = {
    create?: XOR<ClaseSocioCreateWithoutClaseInput, ClaseSocioUncheckedCreateWithoutClaseInput> | ClaseSocioCreateWithoutClaseInput[] | ClaseSocioUncheckedCreateWithoutClaseInput[]
    connectOrCreate?: ClaseSocioCreateOrConnectWithoutClaseInput | ClaseSocioCreateOrConnectWithoutClaseInput[]
    upsert?: ClaseSocioUpsertWithWhereUniqueWithoutClaseInput | ClaseSocioUpsertWithWhereUniqueWithoutClaseInput[]
    createMany?: ClaseSocioCreateManyClaseInputEnvelope
    set?: ClaseSocioWhereUniqueInput | ClaseSocioWhereUniqueInput[]
    disconnect?: ClaseSocioWhereUniqueInput | ClaseSocioWhereUniqueInput[]
    delete?: ClaseSocioWhereUniqueInput | ClaseSocioWhereUniqueInput[]
    connect?: ClaseSocioWhereUniqueInput | ClaseSocioWhereUniqueInput[]
    update?: ClaseSocioUpdateWithWhereUniqueWithoutClaseInput | ClaseSocioUpdateWithWhereUniqueWithoutClaseInput[]
    updateMany?: ClaseSocioUpdateManyWithWhereWithoutClaseInput | ClaseSocioUpdateManyWithWhereWithoutClaseInput[]
    deleteMany?: ClaseSocioScalarWhereInput | ClaseSocioScalarWhereInput[]
  }

  export type ClaseSocioUncheckedUpdateManyWithoutClaseNestedInput = {
    create?: XOR<ClaseSocioCreateWithoutClaseInput, ClaseSocioUncheckedCreateWithoutClaseInput> | ClaseSocioCreateWithoutClaseInput[] | ClaseSocioUncheckedCreateWithoutClaseInput[]
    connectOrCreate?: ClaseSocioCreateOrConnectWithoutClaseInput | ClaseSocioCreateOrConnectWithoutClaseInput[]
    upsert?: ClaseSocioUpsertWithWhereUniqueWithoutClaseInput | ClaseSocioUpsertWithWhereUniqueWithoutClaseInput[]
    createMany?: ClaseSocioCreateManyClaseInputEnvelope
    set?: ClaseSocioWhereUniqueInput | ClaseSocioWhereUniqueInput[]
    disconnect?: ClaseSocioWhereUniqueInput | ClaseSocioWhereUniqueInput[]
    delete?: ClaseSocioWhereUniqueInput | ClaseSocioWhereUniqueInput[]
    connect?: ClaseSocioWhereUniqueInput | ClaseSocioWhereUniqueInput[]
    update?: ClaseSocioUpdateWithWhereUniqueWithoutClaseInput | ClaseSocioUpdateWithWhereUniqueWithoutClaseInput[]
    updateMany?: ClaseSocioUpdateManyWithWhereWithoutClaseInput | ClaseSocioUpdateManyWithWhereWithoutClaseInput[]
    deleteMany?: ClaseSocioScalarWhereInput | ClaseSocioScalarWhereInput[]
  }

  export type ComprobanteCreateNestedManyWithoutCuotaInput = {
    create?: XOR<ComprobanteCreateWithoutCuotaInput, ComprobanteUncheckedCreateWithoutCuotaInput> | ComprobanteCreateWithoutCuotaInput[] | ComprobanteUncheckedCreateWithoutCuotaInput[]
    connectOrCreate?: ComprobanteCreateOrConnectWithoutCuotaInput | ComprobanteCreateOrConnectWithoutCuotaInput[]
    createMany?: ComprobanteCreateManyCuotaInputEnvelope
    connect?: ComprobanteWhereUniqueInput | ComprobanteWhereUniqueInput[]
  }

  export type ActividadCreateNestedOneWithoutCuotaInput = {
    create?: XOR<ActividadCreateWithoutCuotaInput, ActividadUncheckedCreateWithoutCuotaInput>
    connectOrCreate?: ActividadCreateOrConnectWithoutCuotaInput
    connect?: ActividadWhereUniqueInput
  }

  export type SocioCreateNestedOneWithoutCuotaInput = {
    create?: XOR<SocioCreateWithoutCuotaInput, SocioUncheckedCreateWithoutCuotaInput>
    connectOrCreate?: SocioCreateOrConnectWithoutCuotaInput
    connect?: SocioWhereUniqueInput
  }

  export type ComprobanteUncheckedCreateNestedManyWithoutCuotaInput = {
    create?: XOR<ComprobanteCreateWithoutCuotaInput, ComprobanteUncheckedCreateWithoutCuotaInput> | ComprobanteCreateWithoutCuotaInput[] | ComprobanteUncheckedCreateWithoutCuotaInput[]
    connectOrCreate?: ComprobanteCreateOrConnectWithoutCuotaInput | ComprobanteCreateOrConnectWithoutCuotaInput[]
    createMany?: ComprobanteCreateManyCuotaInputEnvelope
    connect?: ComprobanteWhereUniqueInput | ComprobanteWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type Enumforma_de_pagoFieldUpdateOperationsInput = {
    set?: $Enums.forma_de_pago
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type Enumestado_cuotaFieldUpdateOperationsInput = {
    set?: $Enums.estado_cuota
  }

  export type NullableEnumMesFieldUpdateOperationsInput = {
    set?: $Enums.Mes | null
  }

  export type ComprobanteUpdateManyWithoutCuotaNestedInput = {
    create?: XOR<ComprobanteCreateWithoutCuotaInput, ComprobanteUncheckedCreateWithoutCuotaInput> | ComprobanteCreateWithoutCuotaInput[] | ComprobanteUncheckedCreateWithoutCuotaInput[]
    connectOrCreate?: ComprobanteCreateOrConnectWithoutCuotaInput | ComprobanteCreateOrConnectWithoutCuotaInput[]
    upsert?: ComprobanteUpsertWithWhereUniqueWithoutCuotaInput | ComprobanteUpsertWithWhereUniqueWithoutCuotaInput[]
    createMany?: ComprobanteCreateManyCuotaInputEnvelope
    set?: ComprobanteWhereUniqueInput | ComprobanteWhereUniqueInput[]
    disconnect?: ComprobanteWhereUniqueInput | ComprobanteWhereUniqueInput[]
    delete?: ComprobanteWhereUniqueInput | ComprobanteWhereUniqueInput[]
    connect?: ComprobanteWhereUniqueInput | ComprobanteWhereUniqueInput[]
    update?: ComprobanteUpdateWithWhereUniqueWithoutCuotaInput | ComprobanteUpdateWithWhereUniqueWithoutCuotaInput[]
    updateMany?: ComprobanteUpdateManyWithWhereWithoutCuotaInput | ComprobanteUpdateManyWithWhereWithoutCuotaInput[]
    deleteMany?: ComprobanteScalarWhereInput | ComprobanteScalarWhereInput[]
  }

  export type ActividadUpdateOneRequiredWithoutCuotaNestedInput = {
    create?: XOR<ActividadCreateWithoutCuotaInput, ActividadUncheckedCreateWithoutCuotaInput>
    connectOrCreate?: ActividadCreateOrConnectWithoutCuotaInput
    upsert?: ActividadUpsertWithoutCuotaInput
    connect?: ActividadWhereUniqueInput
    update?: XOR<XOR<ActividadUpdateToOneWithWhereWithoutCuotaInput, ActividadUpdateWithoutCuotaInput>, ActividadUncheckedUpdateWithoutCuotaInput>
  }

  export type SocioUpdateOneRequiredWithoutCuotaNestedInput = {
    create?: XOR<SocioCreateWithoutCuotaInput, SocioUncheckedCreateWithoutCuotaInput>
    connectOrCreate?: SocioCreateOrConnectWithoutCuotaInput
    upsert?: SocioUpsertWithoutCuotaInput
    connect?: SocioWhereUniqueInput
    update?: XOR<XOR<SocioUpdateToOneWithWhereWithoutCuotaInput, SocioUpdateWithoutCuotaInput>, SocioUncheckedUpdateWithoutCuotaInput>
  }

  export type ComprobanteUncheckedUpdateManyWithoutCuotaNestedInput = {
    create?: XOR<ComprobanteCreateWithoutCuotaInput, ComprobanteUncheckedCreateWithoutCuotaInput> | ComprobanteCreateWithoutCuotaInput[] | ComprobanteUncheckedCreateWithoutCuotaInput[]
    connectOrCreate?: ComprobanteCreateOrConnectWithoutCuotaInput | ComprobanteCreateOrConnectWithoutCuotaInput[]
    upsert?: ComprobanteUpsertWithWhereUniqueWithoutCuotaInput | ComprobanteUpsertWithWhereUniqueWithoutCuotaInput[]
    createMany?: ComprobanteCreateManyCuotaInputEnvelope
    set?: ComprobanteWhereUniqueInput | ComprobanteWhereUniqueInput[]
    disconnect?: ComprobanteWhereUniqueInput | ComprobanteWhereUniqueInput[]
    delete?: ComprobanteWhereUniqueInput | ComprobanteWhereUniqueInput[]
    connect?: ComprobanteWhereUniqueInput | ComprobanteWhereUniqueInput[]
    update?: ComprobanteUpdateWithWhereUniqueWithoutCuotaInput | ComprobanteUpdateWithWhereUniqueWithoutCuotaInput[]
    updateMany?: ComprobanteUpdateManyWithWhereWithoutCuotaInput | ComprobanteUpdateManyWithWhereWithoutCuotaInput[]
    deleteMany?: ComprobanteScalarWhereInput | ComprobanteScalarWhereInput[]
  }

  export type CuotaCreateNestedOneWithoutComprobanteInput = {
    create?: XOR<CuotaCreateWithoutComprobanteInput, CuotaUncheckedCreateWithoutComprobanteInput>
    connectOrCreate?: CuotaCreateOrConnectWithoutComprobanteInput
    connect?: CuotaWhereUniqueInput
  }

  export type CuotaUpdateOneRequiredWithoutComprobanteNestedInput = {
    create?: XOR<CuotaCreateWithoutComprobanteInput, CuotaUncheckedCreateWithoutComprobanteInput>
    connectOrCreate?: CuotaCreateOrConnectWithoutComprobanteInput
    upsert?: CuotaUpsertWithoutComprobanteInput
    connect?: CuotaWhereUniqueInput
    update?: XOR<XOR<CuotaUpdateToOneWithWhereWithoutComprobanteInput, CuotaUpdateWithoutComprobanteInput>, CuotaUncheckedUpdateWithoutComprobanteInput>
  }

  export type ClaseCreateNestedManyWithoutProfesorInput = {
    create?: XOR<ClaseCreateWithoutProfesorInput, ClaseUncheckedCreateWithoutProfesorInput> | ClaseCreateWithoutProfesorInput[] | ClaseUncheckedCreateWithoutProfesorInput[]
    connectOrCreate?: ClaseCreateOrConnectWithoutProfesorInput | ClaseCreateOrConnectWithoutProfesorInput[]
    createMany?: ClaseCreateManyProfesorInputEnvelope
    connect?: ClaseWhereUniqueInput | ClaseWhereUniqueInput[]
  }

  export type ClaseUncheckedCreateNestedManyWithoutProfesorInput = {
    create?: XOR<ClaseCreateWithoutProfesorInput, ClaseUncheckedCreateWithoutProfesorInput> | ClaseCreateWithoutProfesorInput[] | ClaseUncheckedCreateWithoutProfesorInput[]
    connectOrCreate?: ClaseCreateOrConnectWithoutProfesorInput | ClaseCreateOrConnectWithoutProfesorInput[]
    createMany?: ClaseCreateManyProfesorInputEnvelope
    connect?: ClaseWhereUniqueInput | ClaseWhereUniqueInput[]
  }

  export type ClaseUpdateManyWithoutProfesorNestedInput = {
    create?: XOR<ClaseCreateWithoutProfesorInput, ClaseUncheckedCreateWithoutProfesorInput> | ClaseCreateWithoutProfesorInput[] | ClaseUncheckedCreateWithoutProfesorInput[]
    connectOrCreate?: ClaseCreateOrConnectWithoutProfesorInput | ClaseCreateOrConnectWithoutProfesorInput[]
    upsert?: ClaseUpsertWithWhereUniqueWithoutProfesorInput | ClaseUpsertWithWhereUniqueWithoutProfesorInput[]
    createMany?: ClaseCreateManyProfesorInputEnvelope
    set?: ClaseWhereUniqueInput | ClaseWhereUniqueInput[]
    disconnect?: ClaseWhereUniqueInput | ClaseWhereUniqueInput[]
    delete?: ClaseWhereUniqueInput | ClaseWhereUniqueInput[]
    connect?: ClaseWhereUniqueInput | ClaseWhereUniqueInput[]
    update?: ClaseUpdateWithWhereUniqueWithoutProfesorInput | ClaseUpdateWithWhereUniqueWithoutProfesorInput[]
    updateMany?: ClaseUpdateManyWithWhereWithoutProfesorInput | ClaseUpdateManyWithWhereWithoutProfesorInput[]
    deleteMany?: ClaseScalarWhereInput | ClaseScalarWhereInput[]
  }

  export type ClaseUncheckedUpdateManyWithoutProfesorNestedInput = {
    create?: XOR<ClaseCreateWithoutProfesorInput, ClaseUncheckedCreateWithoutProfesorInput> | ClaseCreateWithoutProfesorInput[] | ClaseUncheckedCreateWithoutProfesorInput[]
    connectOrCreate?: ClaseCreateOrConnectWithoutProfesorInput | ClaseCreateOrConnectWithoutProfesorInput[]
    upsert?: ClaseUpsertWithWhereUniqueWithoutProfesorInput | ClaseUpsertWithWhereUniqueWithoutProfesorInput[]
    createMany?: ClaseCreateManyProfesorInputEnvelope
    set?: ClaseWhereUniqueInput | ClaseWhereUniqueInput[]
    disconnect?: ClaseWhereUniqueInput | ClaseWhereUniqueInput[]
    delete?: ClaseWhereUniqueInput | ClaseWhereUniqueInput[]
    connect?: ClaseWhereUniqueInput | ClaseWhereUniqueInput[]
    update?: ClaseUpdateWithWhereUniqueWithoutProfesorInput | ClaseUpdateWithWhereUniqueWithoutProfesorInput[]
    updateMany?: ClaseUpdateManyWithWhereWithoutProfesorInput | ClaseUpdateManyWithWhereWithoutProfesorInput[]
    deleteMany?: ClaseScalarWhereInput | ClaseScalarWhereInput[]
  }

  export type ClaseCreateNestedOneWithoutClaseSocioInput = {
    create?: XOR<ClaseCreateWithoutClaseSocioInput, ClaseUncheckedCreateWithoutClaseSocioInput>
    connectOrCreate?: ClaseCreateOrConnectWithoutClaseSocioInput
    connect?: ClaseWhereUniqueInput
  }

  export type SocioCreateNestedOneWithoutClaseSocioInput = {
    create?: XOR<SocioCreateWithoutClaseSocioInput, SocioUncheckedCreateWithoutClaseSocioInput>
    connectOrCreate?: SocioCreateOrConnectWithoutClaseSocioInput
    connect?: SocioWhereUniqueInput
  }

  export type ClaseUpdateOneRequiredWithoutClaseSocioNestedInput = {
    create?: XOR<ClaseCreateWithoutClaseSocioInput, ClaseUncheckedCreateWithoutClaseSocioInput>
    connectOrCreate?: ClaseCreateOrConnectWithoutClaseSocioInput
    upsert?: ClaseUpsertWithoutClaseSocioInput
    connect?: ClaseWhereUniqueInput
    update?: XOR<XOR<ClaseUpdateToOneWithWhereWithoutClaseSocioInput, ClaseUpdateWithoutClaseSocioInput>, ClaseUncheckedUpdateWithoutClaseSocioInput>
  }

  export type SocioUpdateOneRequiredWithoutClaseSocioNestedInput = {
    create?: XOR<SocioCreateWithoutClaseSocioInput, SocioUncheckedCreateWithoutClaseSocioInput>
    connectOrCreate?: SocioCreateOrConnectWithoutClaseSocioInput
    upsert?: SocioUpsertWithoutClaseSocioInput
    connect?: SocioWhereUniqueInput
    update?: XOR<XOR<SocioUpdateToOneWithWhereWithoutClaseSocioInput, SocioUpdateWithoutClaseSocioInput>, SocioUncheckedUpdateWithoutClaseSocioInput>
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

  export type NestedEnumFormaDePagoFilter<$PrismaModel = never> = {
    equals?: $Enums.FormaDePago | EnumFormaDePagoFieldRefInput<$PrismaModel>
    in?: $Enums.FormaDePago[] | ListEnumFormaDePagoFieldRefInput<$PrismaModel>
    notIn?: $Enums.FormaDePago[] | ListEnumFormaDePagoFieldRefInput<$PrismaModel>
    not?: NestedEnumFormaDePagoFilter<$PrismaModel> | $Enums.FormaDePago
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

  export type NestedEnumFormaDePagoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FormaDePago | EnumFormaDePagoFieldRefInput<$PrismaModel>
    in?: $Enums.FormaDePago[] | ListEnumFormaDePagoFieldRefInput<$PrismaModel>
    notIn?: $Enums.FormaDePago[] | ListEnumFormaDePagoFieldRefInput<$PrismaModel>
    not?: NestedEnumFormaDePagoWithAggregatesFilter<$PrismaModel> | $Enums.FormaDePago
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFormaDePagoFilter<$PrismaModel>
    _max?: NestedEnumFormaDePagoFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumDiaSemanaFilter<$PrismaModel = never> = {
    equals?: $Enums.DiaSemana | EnumDiaSemanaFieldRefInput<$PrismaModel>
    in?: $Enums.DiaSemana[] | ListEnumDiaSemanaFieldRefInput<$PrismaModel>
    notIn?: $Enums.DiaSemana[] | ListEnumDiaSemanaFieldRefInput<$PrismaModel>
    not?: NestedEnumDiaSemanaFilter<$PrismaModel> | $Enums.DiaSemana
  }

  export type NestedEnumDiaSemanaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DiaSemana | EnumDiaSemanaFieldRefInput<$PrismaModel>
    in?: $Enums.DiaSemana[] | ListEnumDiaSemanaFieldRefInput<$PrismaModel>
    notIn?: $Enums.DiaSemana[] | ListEnumDiaSemanaFieldRefInput<$PrismaModel>
    not?: NestedEnumDiaSemanaWithAggregatesFilter<$PrismaModel> | $Enums.DiaSemana
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDiaSemanaFilter<$PrismaModel>
    _max?: NestedEnumDiaSemanaFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumforma_de_pagoFilter<$PrismaModel = never> = {
    equals?: $Enums.forma_de_pago | Enumforma_de_pagoFieldRefInput<$PrismaModel>
    in?: $Enums.forma_de_pago[] | ListEnumforma_de_pagoFieldRefInput<$PrismaModel>
    notIn?: $Enums.forma_de_pago[] | ListEnumforma_de_pagoFieldRefInput<$PrismaModel>
    not?: NestedEnumforma_de_pagoFilter<$PrismaModel> | $Enums.forma_de_pago
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumestado_cuotaFilter<$PrismaModel = never> = {
    equals?: $Enums.estado_cuota | Enumestado_cuotaFieldRefInput<$PrismaModel>
    in?: $Enums.estado_cuota[] | ListEnumestado_cuotaFieldRefInput<$PrismaModel>
    notIn?: $Enums.estado_cuota[] | ListEnumestado_cuotaFieldRefInput<$PrismaModel>
    not?: NestedEnumestado_cuotaFilter<$PrismaModel> | $Enums.estado_cuota
  }

  export type NestedEnumMesNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Mes | EnumMesFieldRefInput<$PrismaModel> | null
    in?: $Enums.Mes[] | ListEnumMesFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Mes[] | ListEnumMesFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMesNullableFilter<$PrismaModel> | $Enums.Mes | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumforma_de_pagoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.forma_de_pago | Enumforma_de_pagoFieldRefInput<$PrismaModel>
    in?: $Enums.forma_de_pago[] | ListEnumforma_de_pagoFieldRefInput<$PrismaModel>
    notIn?: $Enums.forma_de_pago[] | ListEnumforma_de_pagoFieldRefInput<$PrismaModel>
    not?: NestedEnumforma_de_pagoWithAggregatesFilter<$PrismaModel> | $Enums.forma_de_pago
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumforma_de_pagoFilter<$PrismaModel>
    _max?: NestedEnumforma_de_pagoFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumestado_cuotaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.estado_cuota | Enumestado_cuotaFieldRefInput<$PrismaModel>
    in?: $Enums.estado_cuota[] | ListEnumestado_cuotaFieldRefInput<$PrismaModel>
    notIn?: $Enums.estado_cuota[] | ListEnumestado_cuotaFieldRefInput<$PrismaModel>
    not?: NestedEnumestado_cuotaWithAggregatesFilter<$PrismaModel> | $Enums.estado_cuota
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumestado_cuotaFilter<$PrismaModel>
    _max?: NestedEnumestado_cuotaFilter<$PrismaModel>
  }

  export type NestedEnumMesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Mes | EnumMesFieldRefInput<$PrismaModel> | null
    in?: $Enums.Mes[] | ListEnumMesFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Mes[] | ListEnumMesFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMesNullableWithAggregatesFilter<$PrismaModel> | $Enums.Mes | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumMesNullableFilter<$PrismaModel>
    _max?: NestedEnumMesNullableFilter<$PrismaModel>
  }

  export type EntradaCreateWithoutEventoInput = {
    cantidad: number
    precioUnitario: number
    total: number
    fechaCompra?: Date | string
    createdAt?: Date | string
    comprobanteUrl?: string | null
    formaDePago?: $Enums.FormaDePago
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
    comprobanteUrl?: string | null
    formaDePago?: $Enums.FormaDePago
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
    comprobanteUrl?: StringNullableFilter<"Entrada"> | string | null
    formaDePago?: EnumFormaDePagoFilter<"Entrada"> | $Enums.FormaDePago
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
    ClaseSocio?: ClaseSocioCreateNestedManyWithoutSocioInput
    Cuota?: CuotaCreateNestedManyWithoutSocioInput
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
    ClaseSocio?: ClaseSocioUncheckedCreateNestedManyWithoutSocioInput
    Cuota?: CuotaUncheckedCreateNestedManyWithoutSocioInput
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
    ClaseSocio?: ClaseSocioUpdateManyWithoutSocioNestedInput
    Cuota?: CuotaUpdateManyWithoutSocioNestedInput
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
    ClaseSocio?: ClaseSocioUncheckedUpdateManyWithoutSocioNestedInput
    Cuota?: CuotaUncheckedUpdateManyWithoutSocioNestedInput
  }

  export type ClaseSocioCreateWithoutSocioInput = {
    Clase: ClaseCreateNestedOneWithoutClaseSocioInput
  }

  export type ClaseSocioUncheckedCreateWithoutSocioInput = {
    id?: number
    claseId: number
  }

  export type ClaseSocioCreateOrConnectWithoutSocioInput = {
    where: ClaseSocioWhereUniqueInput
    create: XOR<ClaseSocioCreateWithoutSocioInput, ClaseSocioUncheckedCreateWithoutSocioInput>
  }

  export type ClaseSocioCreateManySocioInputEnvelope = {
    data: ClaseSocioCreateManySocioInput | ClaseSocioCreateManySocioInput[]
    skipDuplicates?: boolean
  }

  export type CuotaCreateWithoutSocioInput = {
    fecha_pago?: Date | string | null
    metodo_pago: $Enums.forma_de_pago
    monto: Decimal | DecimalJsLike | number | string
    estado?: $Enums.estado_cuota
    created_at?: Date | string
    mes?: $Enums.Mes | null
    Comprobante?: ComprobanteCreateNestedManyWithoutCuotaInput
    Actividad: ActividadCreateNestedOneWithoutCuotaInput
  }

  export type CuotaUncheckedCreateWithoutSocioInput = {
    id?: number
    fecha_pago?: Date | string | null
    metodo_pago: $Enums.forma_de_pago
    monto: Decimal | DecimalJsLike | number | string
    estado?: $Enums.estado_cuota
    created_at?: Date | string
    actividad_id: number
    mes?: $Enums.Mes | null
    Comprobante?: ComprobanteUncheckedCreateNestedManyWithoutCuotaInput
  }

  export type CuotaCreateOrConnectWithoutSocioInput = {
    where: CuotaWhereUniqueInput
    create: XOR<CuotaCreateWithoutSocioInput, CuotaUncheckedCreateWithoutSocioInput>
  }

  export type CuotaCreateManySocioInputEnvelope = {
    data: CuotaCreateManySocioInput | CuotaCreateManySocioInput[]
    skipDuplicates?: boolean
  }

  export type EntradaCreateWithoutSocioInput = {
    cantidad: number
    precioUnitario: number
    total: number
    fechaCompra?: Date | string
    createdAt?: Date | string
    comprobanteUrl?: string | null
    formaDePago?: $Enums.FormaDePago
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
    comprobanteUrl?: string | null
    formaDePago?: $Enums.FormaDePago
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

  export type ClaseSocioUpsertWithWhereUniqueWithoutSocioInput = {
    where: ClaseSocioWhereUniqueInput
    update: XOR<ClaseSocioUpdateWithoutSocioInput, ClaseSocioUncheckedUpdateWithoutSocioInput>
    create: XOR<ClaseSocioCreateWithoutSocioInput, ClaseSocioUncheckedCreateWithoutSocioInput>
  }

  export type ClaseSocioUpdateWithWhereUniqueWithoutSocioInput = {
    where: ClaseSocioWhereUniqueInput
    data: XOR<ClaseSocioUpdateWithoutSocioInput, ClaseSocioUncheckedUpdateWithoutSocioInput>
  }

  export type ClaseSocioUpdateManyWithWhereWithoutSocioInput = {
    where: ClaseSocioScalarWhereInput
    data: XOR<ClaseSocioUpdateManyMutationInput, ClaseSocioUncheckedUpdateManyWithoutSocioInput>
  }

  export type ClaseSocioScalarWhereInput = {
    AND?: ClaseSocioScalarWhereInput | ClaseSocioScalarWhereInput[]
    OR?: ClaseSocioScalarWhereInput[]
    NOT?: ClaseSocioScalarWhereInput | ClaseSocioScalarWhereInput[]
    id?: IntFilter<"ClaseSocio"> | number
    claseId?: IntFilter<"ClaseSocio"> | number
    socioId?: IntFilter<"ClaseSocio"> | number
  }

  export type CuotaUpsertWithWhereUniqueWithoutSocioInput = {
    where: CuotaWhereUniqueInput
    update: XOR<CuotaUpdateWithoutSocioInput, CuotaUncheckedUpdateWithoutSocioInput>
    create: XOR<CuotaCreateWithoutSocioInput, CuotaUncheckedCreateWithoutSocioInput>
  }

  export type CuotaUpdateWithWhereUniqueWithoutSocioInput = {
    where: CuotaWhereUniqueInput
    data: XOR<CuotaUpdateWithoutSocioInput, CuotaUncheckedUpdateWithoutSocioInput>
  }

  export type CuotaUpdateManyWithWhereWithoutSocioInput = {
    where: CuotaScalarWhereInput
    data: XOR<CuotaUpdateManyMutationInput, CuotaUncheckedUpdateManyWithoutSocioInput>
  }

  export type CuotaScalarWhereInput = {
    AND?: CuotaScalarWhereInput | CuotaScalarWhereInput[]
    OR?: CuotaScalarWhereInput[]
    NOT?: CuotaScalarWhereInput | CuotaScalarWhereInput[]
    id?: IntFilter<"Cuota"> | number
    fecha_pago?: DateTimeNullableFilter<"Cuota"> | Date | string | null
    metodo_pago?: Enumforma_de_pagoFilter<"Cuota"> | $Enums.forma_de_pago
    monto?: DecimalFilter<"Cuota"> | Decimal | DecimalJsLike | number | string
    estado?: Enumestado_cuotaFilter<"Cuota"> | $Enums.estado_cuota
    created_at?: DateTimeFilter<"Cuota"> | Date | string
    socio_id?: IntFilter<"Cuota"> | number
    actividad_id?: IntFilter<"Cuota"> | number
    mes?: EnumMesNullableFilter<"Cuota"> | $Enums.Mes | null
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
    ClaseSocio?: ClaseSocioCreateNestedManyWithoutSocioInput
    Cuota?: CuotaCreateNestedManyWithoutSocioInput
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
    ClaseSocio?: ClaseSocioUncheckedCreateNestedManyWithoutSocioInput
    Cuota?: CuotaUncheckedCreateNestedManyWithoutSocioInput
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
    ClaseSocio?: ClaseSocioUpdateManyWithoutSocioNestedInput
    Cuota?: CuotaUpdateManyWithoutSocioNestedInput
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
    ClaseSocio?: ClaseSocioUncheckedUpdateManyWithoutSocioNestedInput
    Cuota?: CuotaUncheckedUpdateManyWithoutSocioNestedInput
    entradas?: EntradaUncheckedUpdateManyWithoutSocioNestedInput
  }

  export type ClaseCreateWithoutActividadInput = {
    diaSemana: $Enums.DiaSemana
    horaInicio: string
    horaFin: string
    activo?: boolean
    createdAt?: Date | string
    profesor?: ProfesorCreateNestedOneWithoutClasesInput
    ClaseSocio?: ClaseSocioCreateNestedManyWithoutClaseInput
  }

  export type ClaseUncheckedCreateWithoutActividadInput = {
    id?: number
    diaSemana: $Enums.DiaSemana
    horaInicio: string
    horaFin: string
    activo?: boolean
    profesorId?: number | null
    createdAt?: Date | string
    ClaseSocio?: ClaseSocioUncheckedCreateNestedManyWithoutClaseInput
  }

  export type ClaseCreateOrConnectWithoutActividadInput = {
    where: ClaseWhereUniqueInput
    create: XOR<ClaseCreateWithoutActividadInput, ClaseUncheckedCreateWithoutActividadInput>
  }

  export type ClaseCreateManyActividadInputEnvelope = {
    data: ClaseCreateManyActividadInput | ClaseCreateManyActividadInput[]
    skipDuplicates?: boolean
  }

  export type CuotaCreateWithoutActividadInput = {
    fecha_pago?: Date | string | null
    metodo_pago: $Enums.forma_de_pago
    monto: Decimal | DecimalJsLike | number | string
    estado?: $Enums.estado_cuota
    created_at?: Date | string
    mes?: $Enums.Mes | null
    Comprobante?: ComprobanteCreateNestedManyWithoutCuotaInput
    Socio: SocioCreateNestedOneWithoutCuotaInput
  }

  export type CuotaUncheckedCreateWithoutActividadInput = {
    id?: number
    fecha_pago?: Date | string | null
    metodo_pago: $Enums.forma_de_pago
    monto: Decimal | DecimalJsLike | number | string
    estado?: $Enums.estado_cuota
    created_at?: Date | string
    socio_id: number
    mes?: $Enums.Mes | null
    Comprobante?: ComprobanteUncheckedCreateNestedManyWithoutCuotaInput
  }

  export type CuotaCreateOrConnectWithoutActividadInput = {
    where: CuotaWhereUniqueInput
    create: XOR<CuotaCreateWithoutActividadInput, CuotaUncheckedCreateWithoutActividadInput>
  }

  export type CuotaCreateManyActividadInputEnvelope = {
    data: CuotaCreateManyActividadInput | CuotaCreateManyActividadInput[]
    skipDuplicates?: boolean
  }

  export type ClaseUpsertWithWhereUniqueWithoutActividadInput = {
    where: ClaseWhereUniqueInput
    update: XOR<ClaseUpdateWithoutActividadInput, ClaseUncheckedUpdateWithoutActividadInput>
    create: XOR<ClaseCreateWithoutActividadInput, ClaseUncheckedCreateWithoutActividadInput>
  }

  export type ClaseUpdateWithWhereUniqueWithoutActividadInput = {
    where: ClaseWhereUniqueInput
    data: XOR<ClaseUpdateWithoutActividadInput, ClaseUncheckedUpdateWithoutActividadInput>
  }

  export type ClaseUpdateManyWithWhereWithoutActividadInput = {
    where: ClaseScalarWhereInput
    data: XOR<ClaseUpdateManyMutationInput, ClaseUncheckedUpdateManyWithoutActividadInput>
  }

  export type ClaseScalarWhereInput = {
    AND?: ClaseScalarWhereInput | ClaseScalarWhereInput[]
    OR?: ClaseScalarWhereInput[]
    NOT?: ClaseScalarWhereInput | ClaseScalarWhereInput[]
    id?: IntFilter<"Clase"> | number
    diaSemana?: EnumDiaSemanaFilter<"Clase"> | $Enums.DiaSemana
    horaInicio?: StringFilter<"Clase"> | string
    horaFin?: StringFilter<"Clase"> | string
    activo?: BoolFilter<"Clase"> | boolean
    actividadId?: IntFilter<"Clase"> | number
    profesorId?: IntNullableFilter<"Clase"> | number | null
    createdAt?: DateTimeFilter<"Clase"> | Date | string
  }

  export type CuotaUpsertWithWhereUniqueWithoutActividadInput = {
    where: CuotaWhereUniqueInput
    update: XOR<CuotaUpdateWithoutActividadInput, CuotaUncheckedUpdateWithoutActividadInput>
    create: XOR<CuotaCreateWithoutActividadInput, CuotaUncheckedCreateWithoutActividadInput>
  }

  export type CuotaUpdateWithWhereUniqueWithoutActividadInput = {
    where: CuotaWhereUniqueInput
    data: XOR<CuotaUpdateWithoutActividadInput, CuotaUncheckedUpdateWithoutActividadInput>
  }

  export type CuotaUpdateManyWithWhereWithoutActividadInput = {
    where: CuotaScalarWhereInput
    data: XOR<CuotaUpdateManyMutationInput, CuotaUncheckedUpdateManyWithoutActividadInput>
  }

  export type ActividadCreateWithoutClasesInput = {
    nombre: string
    monto: number
    activo?: boolean
    createdAt?: Date | string
    Cuota?: CuotaCreateNestedManyWithoutActividadInput
  }

  export type ActividadUncheckedCreateWithoutClasesInput = {
    id?: number
    nombre: string
    monto: number
    activo?: boolean
    createdAt?: Date | string
    Cuota?: CuotaUncheckedCreateNestedManyWithoutActividadInput
  }

  export type ActividadCreateOrConnectWithoutClasesInput = {
    where: ActividadWhereUniqueInput
    create: XOR<ActividadCreateWithoutClasesInput, ActividadUncheckedCreateWithoutClasesInput>
  }

  export type ProfesorCreateWithoutClasesInput = {
    nombre: string
    apellido: string
    email: string
    activo?: boolean
    createdAt?: Date | string
  }

  export type ProfesorUncheckedCreateWithoutClasesInput = {
    id?: number
    nombre: string
    apellido: string
    email: string
    activo?: boolean
    createdAt?: Date | string
  }

  export type ProfesorCreateOrConnectWithoutClasesInput = {
    where: ProfesorWhereUniqueInput
    create: XOR<ProfesorCreateWithoutClasesInput, ProfesorUncheckedCreateWithoutClasesInput>
  }

  export type ClaseSocioCreateWithoutClaseInput = {
    Socio: SocioCreateNestedOneWithoutClaseSocioInput
  }

  export type ClaseSocioUncheckedCreateWithoutClaseInput = {
    id?: number
    socioId: number
  }

  export type ClaseSocioCreateOrConnectWithoutClaseInput = {
    where: ClaseSocioWhereUniqueInput
    create: XOR<ClaseSocioCreateWithoutClaseInput, ClaseSocioUncheckedCreateWithoutClaseInput>
  }

  export type ClaseSocioCreateManyClaseInputEnvelope = {
    data: ClaseSocioCreateManyClaseInput | ClaseSocioCreateManyClaseInput[]
    skipDuplicates?: boolean
  }

  export type ActividadUpsertWithoutClasesInput = {
    update: XOR<ActividadUpdateWithoutClasesInput, ActividadUncheckedUpdateWithoutClasesInput>
    create: XOR<ActividadCreateWithoutClasesInput, ActividadUncheckedCreateWithoutClasesInput>
    where?: ActividadWhereInput
  }

  export type ActividadUpdateToOneWithWhereWithoutClasesInput = {
    where?: ActividadWhereInput
    data: XOR<ActividadUpdateWithoutClasesInput, ActividadUncheckedUpdateWithoutClasesInput>
  }

  export type ActividadUpdateWithoutClasesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    monto?: FloatFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Cuota?: CuotaUpdateManyWithoutActividadNestedInput
  }

  export type ActividadUncheckedUpdateWithoutClasesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    monto?: FloatFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Cuota?: CuotaUncheckedUpdateManyWithoutActividadNestedInput
  }

  export type ProfesorUpsertWithoutClasesInput = {
    update: XOR<ProfesorUpdateWithoutClasesInput, ProfesorUncheckedUpdateWithoutClasesInput>
    create: XOR<ProfesorCreateWithoutClasesInput, ProfesorUncheckedCreateWithoutClasesInput>
    where?: ProfesorWhereInput
  }

  export type ProfesorUpdateToOneWithWhereWithoutClasesInput = {
    where?: ProfesorWhereInput
    data: XOR<ProfesorUpdateWithoutClasesInput, ProfesorUncheckedUpdateWithoutClasesInput>
  }

  export type ProfesorUpdateWithoutClasesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfesorUncheckedUpdateWithoutClasesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClaseSocioUpsertWithWhereUniqueWithoutClaseInput = {
    where: ClaseSocioWhereUniqueInput
    update: XOR<ClaseSocioUpdateWithoutClaseInput, ClaseSocioUncheckedUpdateWithoutClaseInput>
    create: XOR<ClaseSocioCreateWithoutClaseInput, ClaseSocioUncheckedCreateWithoutClaseInput>
  }

  export type ClaseSocioUpdateWithWhereUniqueWithoutClaseInput = {
    where: ClaseSocioWhereUniqueInput
    data: XOR<ClaseSocioUpdateWithoutClaseInput, ClaseSocioUncheckedUpdateWithoutClaseInput>
  }

  export type ClaseSocioUpdateManyWithWhereWithoutClaseInput = {
    where: ClaseSocioScalarWhereInput
    data: XOR<ClaseSocioUpdateManyMutationInput, ClaseSocioUncheckedUpdateManyWithoutClaseInput>
  }

  export type ComprobanteCreateWithoutCuotaInput = {
    url: string
    activo?: boolean
    subido_en?: Date | string
  }

  export type ComprobanteUncheckedCreateWithoutCuotaInput = {
    id?: number
    url: string
    activo?: boolean
    subido_en?: Date | string
  }

  export type ComprobanteCreateOrConnectWithoutCuotaInput = {
    where: ComprobanteWhereUniqueInput
    create: XOR<ComprobanteCreateWithoutCuotaInput, ComprobanteUncheckedCreateWithoutCuotaInput>
  }

  export type ComprobanteCreateManyCuotaInputEnvelope = {
    data: ComprobanteCreateManyCuotaInput | ComprobanteCreateManyCuotaInput[]
    skipDuplicates?: boolean
  }

  export type ActividadCreateWithoutCuotaInput = {
    nombre: string
    monto: number
    activo?: boolean
    createdAt?: Date | string
    clases?: ClaseCreateNestedManyWithoutActividadInput
  }

  export type ActividadUncheckedCreateWithoutCuotaInput = {
    id?: number
    nombre: string
    monto: number
    activo?: boolean
    createdAt?: Date | string
    clases?: ClaseUncheckedCreateNestedManyWithoutActividadInput
  }

  export type ActividadCreateOrConnectWithoutCuotaInput = {
    where: ActividadWhereUniqueInput
    create: XOR<ActividadCreateWithoutCuotaInput, ActividadUncheckedCreateWithoutCuotaInput>
  }

  export type SocioCreateWithoutCuotaInput = {
    nombre: string
    apellido: string
    email: string
    fechaNacimiento: Date | string
    pais: string
    sexo: $Enums.Sexo
    fotoCarnet?: string | null
    dni: number
    ClaseSocio?: ClaseSocioCreateNestedManyWithoutSocioInput
    entradas?: EntradaCreateNestedManyWithoutSocioInput
    usuario: UsuarioCreateNestedOneWithoutSocioInput
  }

  export type SocioUncheckedCreateWithoutCuotaInput = {
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
    ClaseSocio?: ClaseSocioUncheckedCreateNestedManyWithoutSocioInput
    entradas?: EntradaUncheckedCreateNestedManyWithoutSocioInput
  }

  export type SocioCreateOrConnectWithoutCuotaInput = {
    where: SocioWhereUniqueInput
    create: XOR<SocioCreateWithoutCuotaInput, SocioUncheckedCreateWithoutCuotaInput>
  }

  export type ComprobanteUpsertWithWhereUniqueWithoutCuotaInput = {
    where: ComprobanteWhereUniqueInput
    update: XOR<ComprobanteUpdateWithoutCuotaInput, ComprobanteUncheckedUpdateWithoutCuotaInput>
    create: XOR<ComprobanteCreateWithoutCuotaInput, ComprobanteUncheckedCreateWithoutCuotaInput>
  }

  export type ComprobanteUpdateWithWhereUniqueWithoutCuotaInput = {
    where: ComprobanteWhereUniqueInput
    data: XOR<ComprobanteUpdateWithoutCuotaInput, ComprobanteUncheckedUpdateWithoutCuotaInput>
  }

  export type ComprobanteUpdateManyWithWhereWithoutCuotaInput = {
    where: ComprobanteScalarWhereInput
    data: XOR<ComprobanteUpdateManyMutationInput, ComprobanteUncheckedUpdateManyWithoutCuotaInput>
  }

  export type ComprobanteScalarWhereInput = {
    AND?: ComprobanteScalarWhereInput | ComprobanteScalarWhereInput[]
    OR?: ComprobanteScalarWhereInput[]
    NOT?: ComprobanteScalarWhereInput | ComprobanteScalarWhereInput[]
    id?: IntFilter<"Comprobante"> | number
    cuotaId?: IntFilter<"Comprobante"> | number
    url?: StringFilter<"Comprobante"> | string
    activo?: BoolFilter<"Comprobante"> | boolean
    subido_en?: DateTimeFilter<"Comprobante"> | Date | string
  }

  export type ActividadUpsertWithoutCuotaInput = {
    update: XOR<ActividadUpdateWithoutCuotaInput, ActividadUncheckedUpdateWithoutCuotaInput>
    create: XOR<ActividadCreateWithoutCuotaInput, ActividadUncheckedCreateWithoutCuotaInput>
    where?: ActividadWhereInput
  }

  export type ActividadUpdateToOneWithWhereWithoutCuotaInput = {
    where?: ActividadWhereInput
    data: XOR<ActividadUpdateWithoutCuotaInput, ActividadUncheckedUpdateWithoutCuotaInput>
  }

  export type ActividadUpdateWithoutCuotaInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    monto?: FloatFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clases?: ClaseUpdateManyWithoutActividadNestedInput
  }

  export type ActividadUncheckedUpdateWithoutCuotaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    monto?: FloatFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clases?: ClaseUncheckedUpdateManyWithoutActividadNestedInput
  }

  export type SocioUpsertWithoutCuotaInput = {
    update: XOR<SocioUpdateWithoutCuotaInput, SocioUncheckedUpdateWithoutCuotaInput>
    create: XOR<SocioCreateWithoutCuotaInput, SocioUncheckedCreateWithoutCuotaInput>
    where?: SocioWhereInput
  }

  export type SocioUpdateToOneWithWhereWithoutCuotaInput = {
    where?: SocioWhereInput
    data: XOR<SocioUpdateWithoutCuotaInput, SocioUncheckedUpdateWithoutCuotaInput>
  }

  export type SocioUpdateWithoutCuotaInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    pais?: StringFieldUpdateOperationsInput | string
    sexo?: EnumSexoFieldUpdateOperationsInput | $Enums.Sexo
    fotoCarnet?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: IntFieldUpdateOperationsInput | number
    ClaseSocio?: ClaseSocioUpdateManyWithoutSocioNestedInput
    entradas?: EntradaUpdateManyWithoutSocioNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutSocioNestedInput
  }

  export type SocioUncheckedUpdateWithoutCuotaInput = {
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
    ClaseSocio?: ClaseSocioUncheckedUpdateManyWithoutSocioNestedInput
    entradas?: EntradaUncheckedUpdateManyWithoutSocioNestedInput
  }

  export type CuotaCreateWithoutComprobanteInput = {
    fecha_pago?: Date | string | null
    metodo_pago: $Enums.forma_de_pago
    monto: Decimal | DecimalJsLike | number | string
    estado?: $Enums.estado_cuota
    created_at?: Date | string
    mes?: $Enums.Mes | null
    Actividad: ActividadCreateNestedOneWithoutCuotaInput
    Socio: SocioCreateNestedOneWithoutCuotaInput
  }

  export type CuotaUncheckedCreateWithoutComprobanteInput = {
    id?: number
    fecha_pago?: Date | string | null
    metodo_pago: $Enums.forma_de_pago
    monto: Decimal | DecimalJsLike | number | string
    estado?: $Enums.estado_cuota
    created_at?: Date | string
    socio_id: number
    actividad_id: number
    mes?: $Enums.Mes | null
  }

  export type CuotaCreateOrConnectWithoutComprobanteInput = {
    where: CuotaWhereUniqueInput
    create: XOR<CuotaCreateWithoutComprobanteInput, CuotaUncheckedCreateWithoutComprobanteInput>
  }

  export type CuotaUpsertWithoutComprobanteInput = {
    update: XOR<CuotaUpdateWithoutComprobanteInput, CuotaUncheckedUpdateWithoutComprobanteInput>
    create: XOR<CuotaCreateWithoutComprobanteInput, CuotaUncheckedCreateWithoutComprobanteInput>
    where?: CuotaWhereInput
  }

  export type CuotaUpdateToOneWithWhereWithoutComprobanteInput = {
    where?: CuotaWhereInput
    data: XOR<CuotaUpdateWithoutComprobanteInput, CuotaUncheckedUpdateWithoutComprobanteInput>
  }

  export type CuotaUpdateWithoutComprobanteInput = {
    fecha_pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metodo_pago?: Enumforma_de_pagoFieldUpdateOperationsInput | $Enums.forma_de_pago
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: Enumestado_cuotaFieldUpdateOperationsInput | $Enums.estado_cuota
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    mes?: NullableEnumMesFieldUpdateOperationsInput | $Enums.Mes | null
    Actividad?: ActividadUpdateOneRequiredWithoutCuotaNestedInput
    Socio?: SocioUpdateOneRequiredWithoutCuotaNestedInput
  }

  export type CuotaUncheckedUpdateWithoutComprobanteInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha_pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metodo_pago?: Enumforma_de_pagoFieldUpdateOperationsInput | $Enums.forma_de_pago
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: Enumestado_cuotaFieldUpdateOperationsInput | $Enums.estado_cuota
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    socio_id?: IntFieldUpdateOperationsInput | number
    actividad_id?: IntFieldUpdateOperationsInput | number
    mes?: NullableEnumMesFieldUpdateOperationsInput | $Enums.Mes | null
  }

  export type ClaseCreateWithoutProfesorInput = {
    diaSemana: $Enums.DiaSemana
    horaInicio: string
    horaFin: string
    activo?: boolean
    createdAt?: Date | string
    actividad: ActividadCreateNestedOneWithoutClasesInput
    ClaseSocio?: ClaseSocioCreateNestedManyWithoutClaseInput
  }

  export type ClaseUncheckedCreateWithoutProfesorInput = {
    id?: number
    diaSemana: $Enums.DiaSemana
    horaInicio: string
    horaFin: string
    activo?: boolean
    actividadId: number
    createdAt?: Date | string
    ClaseSocio?: ClaseSocioUncheckedCreateNestedManyWithoutClaseInput
  }

  export type ClaseCreateOrConnectWithoutProfesorInput = {
    where: ClaseWhereUniqueInput
    create: XOR<ClaseCreateWithoutProfesorInput, ClaseUncheckedCreateWithoutProfesorInput>
  }

  export type ClaseCreateManyProfesorInputEnvelope = {
    data: ClaseCreateManyProfesorInput | ClaseCreateManyProfesorInput[]
    skipDuplicates?: boolean
  }

  export type ClaseUpsertWithWhereUniqueWithoutProfesorInput = {
    where: ClaseWhereUniqueInput
    update: XOR<ClaseUpdateWithoutProfesorInput, ClaseUncheckedUpdateWithoutProfesorInput>
    create: XOR<ClaseCreateWithoutProfesorInput, ClaseUncheckedCreateWithoutProfesorInput>
  }

  export type ClaseUpdateWithWhereUniqueWithoutProfesorInput = {
    where: ClaseWhereUniqueInput
    data: XOR<ClaseUpdateWithoutProfesorInput, ClaseUncheckedUpdateWithoutProfesorInput>
  }

  export type ClaseUpdateManyWithWhereWithoutProfesorInput = {
    where: ClaseScalarWhereInput
    data: XOR<ClaseUpdateManyMutationInput, ClaseUncheckedUpdateManyWithoutProfesorInput>
  }

  export type ClaseCreateWithoutClaseSocioInput = {
    diaSemana: $Enums.DiaSemana
    horaInicio: string
    horaFin: string
    activo?: boolean
    createdAt?: Date | string
    actividad: ActividadCreateNestedOneWithoutClasesInput
    profesor?: ProfesorCreateNestedOneWithoutClasesInput
  }

  export type ClaseUncheckedCreateWithoutClaseSocioInput = {
    id?: number
    diaSemana: $Enums.DiaSemana
    horaInicio: string
    horaFin: string
    activo?: boolean
    actividadId: number
    profesorId?: number | null
    createdAt?: Date | string
  }

  export type ClaseCreateOrConnectWithoutClaseSocioInput = {
    where: ClaseWhereUniqueInput
    create: XOR<ClaseCreateWithoutClaseSocioInput, ClaseUncheckedCreateWithoutClaseSocioInput>
  }

  export type SocioCreateWithoutClaseSocioInput = {
    nombre: string
    apellido: string
    email: string
    fechaNacimiento: Date | string
    pais: string
    sexo: $Enums.Sexo
    fotoCarnet?: string | null
    dni: number
    Cuota?: CuotaCreateNestedManyWithoutSocioInput
    entradas?: EntradaCreateNestedManyWithoutSocioInput
    usuario: UsuarioCreateNestedOneWithoutSocioInput
  }

  export type SocioUncheckedCreateWithoutClaseSocioInput = {
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
    Cuota?: CuotaUncheckedCreateNestedManyWithoutSocioInput
    entradas?: EntradaUncheckedCreateNestedManyWithoutSocioInput
  }

  export type SocioCreateOrConnectWithoutClaseSocioInput = {
    where: SocioWhereUniqueInput
    create: XOR<SocioCreateWithoutClaseSocioInput, SocioUncheckedCreateWithoutClaseSocioInput>
  }

  export type ClaseUpsertWithoutClaseSocioInput = {
    update: XOR<ClaseUpdateWithoutClaseSocioInput, ClaseUncheckedUpdateWithoutClaseSocioInput>
    create: XOR<ClaseCreateWithoutClaseSocioInput, ClaseUncheckedCreateWithoutClaseSocioInput>
    where?: ClaseWhereInput
  }

  export type ClaseUpdateToOneWithWhereWithoutClaseSocioInput = {
    where?: ClaseWhereInput
    data: XOR<ClaseUpdateWithoutClaseSocioInput, ClaseUncheckedUpdateWithoutClaseSocioInput>
  }

  export type ClaseUpdateWithoutClaseSocioInput = {
    diaSemana?: EnumDiaSemanaFieldUpdateOperationsInput | $Enums.DiaSemana
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    actividad?: ActividadUpdateOneRequiredWithoutClasesNestedInput
    profesor?: ProfesorUpdateOneWithoutClasesNestedInput
  }

  export type ClaseUncheckedUpdateWithoutClaseSocioInput = {
    id?: IntFieldUpdateOperationsInput | number
    diaSemana?: EnumDiaSemanaFieldUpdateOperationsInput | $Enums.DiaSemana
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    actividadId?: IntFieldUpdateOperationsInput | number
    profesorId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocioUpsertWithoutClaseSocioInput = {
    update: XOR<SocioUpdateWithoutClaseSocioInput, SocioUncheckedUpdateWithoutClaseSocioInput>
    create: XOR<SocioCreateWithoutClaseSocioInput, SocioUncheckedCreateWithoutClaseSocioInput>
    where?: SocioWhereInput
  }

  export type SocioUpdateToOneWithWhereWithoutClaseSocioInput = {
    where?: SocioWhereInput
    data: XOR<SocioUpdateWithoutClaseSocioInput, SocioUncheckedUpdateWithoutClaseSocioInput>
  }

  export type SocioUpdateWithoutClaseSocioInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    pais?: StringFieldUpdateOperationsInput | string
    sexo?: EnumSexoFieldUpdateOperationsInput | $Enums.Sexo
    fotoCarnet?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: IntFieldUpdateOperationsInput | number
    Cuota?: CuotaUpdateManyWithoutSocioNestedInput
    entradas?: EntradaUpdateManyWithoutSocioNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutSocioNestedInput
  }

  export type SocioUncheckedUpdateWithoutClaseSocioInput = {
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
    Cuota?: CuotaUncheckedUpdateManyWithoutSocioNestedInput
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
    comprobanteUrl?: string | null
    formaDePago?: $Enums.FormaDePago
  }

  export type EntradaUpdateWithoutEventoInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    fechaCompra?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comprobanteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    formaDePago?: EnumFormaDePagoFieldUpdateOperationsInput | $Enums.FormaDePago
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
    comprobanteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    formaDePago?: EnumFormaDePagoFieldUpdateOperationsInput | $Enums.FormaDePago
  }

  export type EntradaUncheckedUpdateManyWithoutEventoInput = {
    id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    fechaCompra?: DateTimeFieldUpdateOperationsInput | Date | string
    socioId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comprobanteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    formaDePago?: EnumFormaDePagoFieldUpdateOperationsInput | $Enums.FormaDePago
  }

  export type ClaseSocioCreateManySocioInput = {
    id?: number
    claseId: number
  }

  export type CuotaCreateManySocioInput = {
    id?: number
    fecha_pago?: Date | string | null
    metodo_pago: $Enums.forma_de_pago
    monto: Decimal | DecimalJsLike | number | string
    estado?: $Enums.estado_cuota
    created_at?: Date | string
    actividad_id: number
    mes?: $Enums.Mes | null
  }

  export type EntradaCreateManySocioInput = {
    id?: number
    eventoId: number
    cantidad: number
    precioUnitario: number
    total: number
    fechaCompra?: Date | string
    createdAt?: Date | string
    comprobanteUrl?: string | null
    formaDePago?: $Enums.FormaDePago
  }

  export type ClaseSocioUpdateWithoutSocioInput = {
    Clase?: ClaseUpdateOneRequiredWithoutClaseSocioNestedInput
  }

  export type ClaseSocioUncheckedUpdateWithoutSocioInput = {
    id?: IntFieldUpdateOperationsInput | number
    claseId?: IntFieldUpdateOperationsInput | number
  }

  export type ClaseSocioUncheckedUpdateManyWithoutSocioInput = {
    id?: IntFieldUpdateOperationsInput | number
    claseId?: IntFieldUpdateOperationsInput | number
  }

  export type CuotaUpdateWithoutSocioInput = {
    fecha_pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metodo_pago?: Enumforma_de_pagoFieldUpdateOperationsInput | $Enums.forma_de_pago
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: Enumestado_cuotaFieldUpdateOperationsInput | $Enums.estado_cuota
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    mes?: NullableEnumMesFieldUpdateOperationsInput | $Enums.Mes | null
    Comprobante?: ComprobanteUpdateManyWithoutCuotaNestedInput
    Actividad?: ActividadUpdateOneRequiredWithoutCuotaNestedInput
  }

  export type CuotaUncheckedUpdateWithoutSocioInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha_pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metodo_pago?: Enumforma_de_pagoFieldUpdateOperationsInput | $Enums.forma_de_pago
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: Enumestado_cuotaFieldUpdateOperationsInput | $Enums.estado_cuota
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    actividad_id?: IntFieldUpdateOperationsInput | number
    mes?: NullableEnumMesFieldUpdateOperationsInput | $Enums.Mes | null
    Comprobante?: ComprobanteUncheckedUpdateManyWithoutCuotaNestedInput
  }

  export type CuotaUncheckedUpdateManyWithoutSocioInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha_pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metodo_pago?: Enumforma_de_pagoFieldUpdateOperationsInput | $Enums.forma_de_pago
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: Enumestado_cuotaFieldUpdateOperationsInput | $Enums.estado_cuota
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    actividad_id?: IntFieldUpdateOperationsInput | number
    mes?: NullableEnumMesFieldUpdateOperationsInput | $Enums.Mes | null
  }

  export type EntradaUpdateWithoutSocioInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    fechaCompra?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comprobanteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    formaDePago?: EnumFormaDePagoFieldUpdateOperationsInput | $Enums.FormaDePago
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
    comprobanteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    formaDePago?: EnumFormaDePagoFieldUpdateOperationsInput | $Enums.FormaDePago
  }

  export type EntradaUncheckedUpdateManyWithoutSocioInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    fechaCompra?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comprobanteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    formaDePago?: EnumFormaDePagoFieldUpdateOperationsInput | $Enums.FormaDePago
  }

  export type ClaseCreateManyActividadInput = {
    id?: number
    diaSemana: $Enums.DiaSemana
    horaInicio: string
    horaFin: string
    activo?: boolean
    profesorId?: number | null
    createdAt?: Date | string
  }

  export type CuotaCreateManyActividadInput = {
    id?: number
    fecha_pago?: Date | string | null
    metodo_pago: $Enums.forma_de_pago
    monto: Decimal | DecimalJsLike | number | string
    estado?: $Enums.estado_cuota
    created_at?: Date | string
    socio_id: number
    mes?: $Enums.Mes | null
  }

  export type ClaseUpdateWithoutActividadInput = {
    diaSemana?: EnumDiaSemanaFieldUpdateOperationsInput | $Enums.DiaSemana
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profesor?: ProfesorUpdateOneWithoutClasesNestedInput
    ClaseSocio?: ClaseSocioUpdateManyWithoutClaseNestedInput
  }

  export type ClaseUncheckedUpdateWithoutActividadInput = {
    id?: IntFieldUpdateOperationsInput | number
    diaSemana?: EnumDiaSemanaFieldUpdateOperationsInput | $Enums.DiaSemana
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    profesorId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ClaseSocio?: ClaseSocioUncheckedUpdateManyWithoutClaseNestedInput
  }

  export type ClaseUncheckedUpdateManyWithoutActividadInput = {
    id?: IntFieldUpdateOperationsInput | number
    diaSemana?: EnumDiaSemanaFieldUpdateOperationsInput | $Enums.DiaSemana
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    profesorId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CuotaUpdateWithoutActividadInput = {
    fecha_pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metodo_pago?: Enumforma_de_pagoFieldUpdateOperationsInput | $Enums.forma_de_pago
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: Enumestado_cuotaFieldUpdateOperationsInput | $Enums.estado_cuota
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    mes?: NullableEnumMesFieldUpdateOperationsInput | $Enums.Mes | null
    Comprobante?: ComprobanteUpdateManyWithoutCuotaNestedInput
    Socio?: SocioUpdateOneRequiredWithoutCuotaNestedInput
  }

  export type CuotaUncheckedUpdateWithoutActividadInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha_pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metodo_pago?: Enumforma_de_pagoFieldUpdateOperationsInput | $Enums.forma_de_pago
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: Enumestado_cuotaFieldUpdateOperationsInput | $Enums.estado_cuota
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    socio_id?: IntFieldUpdateOperationsInput | number
    mes?: NullableEnumMesFieldUpdateOperationsInput | $Enums.Mes | null
    Comprobante?: ComprobanteUncheckedUpdateManyWithoutCuotaNestedInput
  }

  export type CuotaUncheckedUpdateManyWithoutActividadInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha_pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metodo_pago?: Enumforma_de_pagoFieldUpdateOperationsInput | $Enums.forma_de_pago
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: Enumestado_cuotaFieldUpdateOperationsInput | $Enums.estado_cuota
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    socio_id?: IntFieldUpdateOperationsInput | number
    mes?: NullableEnumMesFieldUpdateOperationsInput | $Enums.Mes | null
  }

  export type ClaseSocioCreateManyClaseInput = {
    id?: number
    socioId: number
  }

  export type ClaseSocioUpdateWithoutClaseInput = {
    Socio?: SocioUpdateOneRequiredWithoutClaseSocioNestedInput
  }

  export type ClaseSocioUncheckedUpdateWithoutClaseInput = {
    id?: IntFieldUpdateOperationsInput | number
    socioId?: IntFieldUpdateOperationsInput | number
  }

  export type ClaseSocioUncheckedUpdateManyWithoutClaseInput = {
    id?: IntFieldUpdateOperationsInput | number
    socioId?: IntFieldUpdateOperationsInput | number
  }

  export type ComprobanteCreateManyCuotaInput = {
    id?: number
    url: string
    activo?: boolean
    subido_en?: Date | string
  }

  export type ComprobanteUpdateWithoutCuotaInput = {
    url?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    subido_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComprobanteUncheckedUpdateWithoutCuotaInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    subido_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComprobanteUncheckedUpdateManyWithoutCuotaInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    subido_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClaseCreateManyProfesorInput = {
    id?: number
    diaSemana: $Enums.DiaSemana
    horaInicio: string
    horaFin: string
    activo?: boolean
    actividadId: number
    createdAt?: Date | string
  }

  export type ClaseUpdateWithoutProfesorInput = {
    diaSemana?: EnumDiaSemanaFieldUpdateOperationsInput | $Enums.DiaSemana
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    actividad?: ActividadUpdateOneRequiredWithoutClasesNestedInput
    ClaseSocio?: ClaseSocioUpdateManyWithoutClaseNestedInput
  }

  export type ClaseUncheckedUpdateWithoutProfesorInput = {
    id?: IntFieldUpdateOperationsInput | number
    diaSemana?: EnumDiaSemanaFieldUpdateOperationsInput | $Enums.DiaSemana
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    actividadId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ClaseSocio?: ClaseSocioUncheckedUpdateManyWithoutClaseNestedInput
  }

  export type ClaseUncheckedUpdateManyWithoutProfesorInput = {
    id?: IntFieldUpdateOperationsInput | number
    diaSemana?: EnumDiaSemanaFieldUpdateOperationsInput | $Enums.DiaSemana
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    actividadId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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