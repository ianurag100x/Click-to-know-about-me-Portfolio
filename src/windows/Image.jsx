import WindowWrapper from "#hoc/WindowWrapper";
import { WindowControls } from "#components";
import useWindowStore from "#store/window";

const ImgFile = () => {
  const { windows } = useWindowStore();
  const data = windows.imgfile?.data;

  if (!data) return null;

  return (
    <>
      <div id='window-header'>
        <WindowControls target='imgfile' />
        <h2>{data.name}</h2>
      </div>
      <div className='p-5 bg-white'>
        <img
          src={data.imageUrl}
          alt={data.name}
          className='max-w-full h-auto'
        />
      </div>
    </>
  );
};

const ImgFileWindow = WindowWrapper(ImgFile, "imgfile");

export default ImgFileWindow;
