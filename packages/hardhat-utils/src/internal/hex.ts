import {
  getPrefixedHexString,
  getUnprefixedHexString,
  isHexStringPrefixed,
} from "../hex.js";

export function padToEven(value: string) {
  const isPrefixed = isHexStringPrefixed(value);
  const unprefixed = getUnprefixedHexString(value);

  let padded;
  if (unprefixed.length === 0) {
    // Pad the empty string with a single zero, as Buffer.from([]) will not
    // interpret it correctly otherwise.
    padded = "00";
  } else {
    padded = unprefixed.length % 2 === 0 ? unprefixed : `0${unprefixed}`;
  }

  return isPrefixed ? getPrefixedHexString(padded) : padded;
}
