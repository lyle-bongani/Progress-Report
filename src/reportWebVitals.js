const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      const logMetric = (metric) => {
        console.log(metric.name, metric.value);
        onPerfEntry(metric);
      };
      getCLS(logMetric);
      getFID(logMetric);
      getFCP(logMetric);
      getLCP(logMetric);
      getTTFB(logMetric);
    });
  }
};

export default reportWebVitals;
