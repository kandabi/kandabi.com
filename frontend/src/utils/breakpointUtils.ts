export enum Breakpoint {
    xs = 'xs',
    sm = 'sm',
    md = 'md',
    lg = 'lg',
    xl = 'xl',
    xxl = 'xxl',
}

export const mediaSizesConfig: Record<Breakpoint, string> = {
    [Breakpoint.xs]: '(min-width: 320px)',
    [Breakpoint.sm]: '(min-width: 576px)',
    [Breakpoint.md]: '(min-width: 768px)',
    [Breakpoint.lg]: '(min-width: 992px)',
    [Breakpoint.xl]: '(min-width: 1200px)',
    [Breakpoint.xxl]: '(min-width: 1400px)',
};

export const breakpointConfig: Record<Breakpoint, string> = {
    [Breakpoint.xs]: `@media ${mediaSizesConfig.xs}`,
    [Breakpoint.sm]: `@media ${mediaSizesConfig.sm}`,
    [Breakpoint.md]: `@media ${mediaSizesConfig.md}`,
    [Breakpoint.lg]: `@media ${mediaSizesConfig.lg}`,
    [Breakpoint.xl]: `@media ${mediaSizesConfig.xl}`,
    [Breakpoint.xxl]: `@media ${mediaSizesConfig.xxl}`,
};
