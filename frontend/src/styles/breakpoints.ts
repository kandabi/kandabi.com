enum Breakpoints {
   xs = 'xs',
   sm = 'sm',
   md = 'md',
   lg = 'lg',
   xl = 'xl',
   xxl = 'xxl',
}

const mediaSizes: { [key in Breakpoints]: string } = {
   [Breakpoints.xs]: '(min-width: 320px)',
   [Breakpoints.sm]: '(min-width: 576px)',
   [Breakpoints.md]: '(min-width: 768px)',
   [Breakpoints.lg]: '(min-width: 992px)',
   [Breakpoints.xl]: '(min-width: 1200px)',
   [Breakpoints.xxl]: '(min-width: 1400px)',
};

const breakpoints: { [key in Breakpoints]: string } = {
   [Breakpoints.xs]: `@media ${mediaSizes.xs}`,
   [Breakpoints.sm]: `@media ${mediaSizes.sm}`,
   [Breakpoints.md]: `@media ${mediaSizes.md}`,
   [Breakpoints.lg]: `@media ${mediaSizes.lg}`,
   [Breakpoints.xl]: `@media ${mediaSizes.xl}`,
   [Breakpoints.xxl]: `@media ${mediaSizes.xxl}`,
};

export { Breakpoints, breakpoints, mediaSizes };
