enum Breakpoints {
   xs = 'xs',
   sm = 'sm',
   md = 'md',
   lg = 'lg',
   xl = 'xl',
   xxl = 'xxl',
}

const mediaSizesConfig: { [key in Breakpoints]: string } = {
   [Breakpoints.xs]: '(min-width: 320px)',
   [Breakpoints.sm]: '(min-width: 576px)',
   [Breakpoints.md]: '(min-width: 768px)',
   [Breakpoints.lg]: '(min-width: 992px)',
   [Breakpoints.xl]: '(min-width: 1200px)',
   [Breakpoints.xxl]: '(min-width: 1400px)',
};

const breakpointConfig: { [key in Breakpoints]: string } = {
   [Breakpoints.xs]: `@media ${mediaSizesConfig.xs}`,
   [Breakpoints.sm]: `@media ${mediaSizesConfig.sm}`,
   [Breakpoints.md]: `@media ${mediaSizesConfig.md}`,
   [Breakpoints.lg]: `@media ${mediaSizesConfig.lg}`,
   [Breakpoints.xl]: `@media ${mediaSizesConfig.xl}`,
   [Breakpoints.xxl]: `@media ${mediaSizesConfig.xxl}`,
};

export { Breakpoints, breakpointConfig, mediaSizesConfig };
