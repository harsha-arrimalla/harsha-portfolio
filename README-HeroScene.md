# React Three Fiber Hero Scene

## Component Structure

### 1. `HeroSection.tsx` (Main Container)
**Purpose:** Top-level component that sets up the Canvas and overlays content.

**Responsibilities:**
- Creates React Three Fiber Canvas
- Configures performance settings
- Handles Suspense boundaries
- Overlays text content
- Manages gradient overlays for readability

**Key Features:**
- Adaptive pixel ratio (`dpr={[1, 2]}`)
- Performance monitoring (`performance={{ min: 0.5 }}`)
- Suspense for code splitting
- Motion animations for text

---

### 2. `HeroScene.tsx` / `HeroSceneOptimized.tsx` (3D Scene)
**Purpose:** Contains all 3D elements and animations.

**Components:**

#### Abstract Object
- **Geometry:** Dodecahedron with subtle distortion
- **Material:** MeshStandardMaterial with emissive glow
- **Properties:**
  - Metalness: 0.3
  - Roughness: 0.4
  - Emissive: Blue (#3b82f6) at 20% intensity
  - Transparency: 80% opacity

#### Lighting Setup
1. **Ambient Light** (0.4 intensity)
   - Soft base illumination
   - Prevents harsh shadows

2. **Directional Light** (0.6 intensity, position [5,5,5])
   - Main key light
   - Creates depth and dimension

3. **Fill Light** (0.3 intensity, position [-5,-5,-5], blue tint)
   - Softens shadows
   - Adds color interest

4. **Point Light** (0.5 intensity, position [0,0,10], blue)
   - Rim lighting
   - Creates edge glow effect

#### Animations
- **Rotation:** Continuous slow rotation (x: 0.2 rad/s, y: 0.3 rad/s)
- **Float:** Vertical oscillation using sine wave (±0.5 units)
- **Cursor Follow:** Smooth interpolation toward cursor position (5% damping)

---

### 3. `useMouse.ts` (Custom Hook)
**Purpose:** Tracks normalized mouse position.

**Returns:**
- `x`: Normalized to -1 to 1 (left to right)
- `y`: Normalized to -1 to 1 (bottom to top, inverted)

**Implementation:**
- Uses `mousemove` event listener
- Normalizes coordinates based on window dimensions
- Cleans up on unmount

---

## Performance Optimizations

### 1. Geometry Memoization
```typescript
const geometry = useMemo(() => {
  // Create geometry once
}, []);
```
- Prevents recreation on every render
- Geometry is expensive to compute

### 2. Material Memoization
```typescript
const material = useMemo(() => {
  // Create material once
}, []);
```
- Material instances are reused
- Reduces memory allocation

### 3. Canvas Settings
- `dpr={[1, 2]}`: Limits pixel ratio (prevents 3x on retina)
- `powerPreference: 'high-performance'`: Uses dedicated GPU
- `antialias: true`: Smooth edges (can disable for more performance)

### 4. Adaptive Performance
- `performance={{ min: 0.5 }}`: Automatically reduces quality if FPS drops
- React Three Fiber handles this internally

### 5. Efficient Animation Loop
- Uses `useFrame` hook (runs at 60fps)
- Minimal calculations per frame
- Smooth interpolation (damping) instead of direct assignment

### 6. Single Mesh
- One mesh instead of multiple
- Reduces draw calls
- Easier to optimize

---

## Cursor Interaction

### Implementation
1. **Mouse Position:** Tracked via `useMouse` hook
2. **Normalization:** Converted to 3D world coordinates
3. **Damping:** Smooth interpolation (5% per frame)
4. **Viewport Scaling:** Adjusted for different screen sizes

### Behavior
- Object follows cursor with slight lag (smooth, not jittery)
- Works in all directions (x, y, z)
- Responsive to viewport size

---

## Usage

```tsx
import HeroSection from '@/components/HeroSection';

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      {/* Rest of page */}
    </div>
  );
}
```

---

## Customization

### Change Object Shape
Replace `DodecahedronGeometry` with:
- `TetrahedronGeometry`
- `OctahedronGeometry`
- `IcosahedronGeometry`
- Custom `BufferGeometry`

### Adjust Lighting
Modify intensity values:
- Lower = darker, more dramatic
- Higher = brighter, more even

### Change Colors
Update material properties:
- `color`: Base color
- `emissive`: Glow color
- Light `color` props

### Modify Animation Speed
In `useFrame`:
- Rotation: Change `delta * 0.2` multiplier
- Float: Change `Math.sin(time)` amplitude
- Cursor follow: Change damping factor (0.05)

---

## Browser Support

- Modern browsers with WebGL support
- Graceful degradation: Shows loading state if WebGL unavailable
- Mobile: Reduced quality automatically via `dpr` setting

---

## Dependencies

```json
{
  "@react-three/fiber": "^8.0.0",
  "@react-three/drei": "^9.0.0",
  "three": "^0.150.0",
  "framer-motion": "^10.0.0"
}
```

---

## Performance Metrics

**Target:**
- 60 FPS on desktop
- 30+ FPS on mobile
- < 16ms frame time

**Optimization Tips:**
- Reduce geometry complexity on mobile
- Lower pixel ratio for slower devices
- Disable shadows (already disabled)
- Use LOD (Level of Detail) for multiple objects
