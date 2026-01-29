const Loading = () => {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(15, 15, 15, 0.08)',
        display: 'flex',
        justifyContent: 'center',
        backdropFilter: 'blur(1px)',
        alignItems: 'center',
        zIndex: 9999,
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '70px',
          height: '70px',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            border: '6px solid rgba(228, 72, 72, 0.2)',
            borderTopColor: '#e44848',
            animation: 'spin 1s linear infinite',
            boxShadow: '0 0 20px rgba(228, 72, 72, 0.4)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: '12px',
            borderRadius: '50%',
            border: '6px solid rgba(216, 67, 67, 0.2)',
            borderTopColor: '#d84343',
            animation: 'spin 0.7s linear reverse infinite',
            boxShadow: '0 0 15px rgba(216, 67, 67, 0.3)',
          }}
        />
      </div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Loading;
