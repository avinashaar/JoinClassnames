declare function JoinClassList(
  ...args: (
    | string
    | number
    | boolean
    | null
    | undefined
    | Record<string, boolean>
    | (string | number | boolean | null | undefined | Record<string, boolean>)[]
  )[]
): string;

export default JoinClassList;
