enum Breakpoints {
   xs = 'xs',
   sm = 'sm',
   md = 'md',
   lg = 'lg',
   xl = 'xl',
   xxl = 'xxl',
}

const breakpoints: { [key in Breakpoints]: string } = {
   [Breakpoints.xs]: '@media (min-width: 320px)',
   [Breakpoints.sm]: '@media (min-width: 576px)',
   [Breakpoints.md]: '@media (min-width: 768px)',
   [Breakpoints.lg]: '@media (min-width: 992px)',
   [Breakpoints.xl]: '@media (min-width: 1200px)',
   [Breakpoints.xxl]: '@media (min-width: 1400px)',
};

export { Breakpoints, breakpoints };
