import Image from 'next/image';

function PostItemRen({ src }) {
  return (
    <div>
      <Image
        src={src}
        alt="cover画像"
        style={{
          height: '100%',
          objectFit: 'cover',
          width: '100%',
        }}
        width={500} // 適切な幅を設定
        height={300} // 適切な高さを設定
      />
    </div>
  );
}

export default PostItemRen;
