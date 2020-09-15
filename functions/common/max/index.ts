import {
  AnyFloatPrimitive,
  FloatPrimitive,
  Vec2Primitive,
  Vec3Primitive,
  Vec4Primitive,
} from "../../../primitive";
import { Expression } from "../../../expression";

export function max(
  x: Expression<FloatPrimitive>,
  y: Expression<FloatPrimitive>
): Expression<FloatPrimitive>;

export function max(
  x: Expression<Vec2Primitive>,
  y: Expression<FloatPrimitive>
): Expression<Vec2Primitive>;

export function max(
  x: Expression<Vec2Primitive>,
  y: Expression<Vec2Primitive>
): Expression<Vec2Primitive>;

export function max(
  x: Expression<Vec3Primitive>,
  y: Expression<FloatPrimitive>
): Expression<Vec3Primitive>;

export function max(
  x: Expression<Vec3Primitive>,
  y: Expression<Vec3Primitive>
): Expression<Vec3Primitive>;

export function max(
  x: Expression<Vec4Primitive>,
  y: Expression<FloatPrimitive>
): Expression<Vec4Primitive>;

export function max(
  x: Expression<Vec4Primitive>,
  y: Expression<Vec4Primitive>
): Expression<Vec4Primitive>;

export function max(
  x: Expression<AnyFloatPrimitive>,
  y: Expression<AnyFloatPrimitive>
): Expression<AnyFloatPrimitive> {
  x;
  y;

  return new Expression("float");
}
