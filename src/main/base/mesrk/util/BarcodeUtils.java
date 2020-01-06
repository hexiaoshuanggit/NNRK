package mesrk.util;

import java.awt.image.BufferedImage;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.HashMap;
import java.util.Map;

import javax.imageio.ImageIO;

import com.google.zxing.BarcodeFormat;
import com.google.zxing.BinaryBitmap;
import com.google.zxing.DecodeHintType;
import com.google.zxing.EncodeHintType;
import com.google.zxing.LuminanceSource;
import com.google.zxing.MultiFormatReader;
import com.google.zxing.MultiFormatWriter;
import com.google.zxing.NotFoundException;
import com.google.zxing.Result;
import com.google.zxing.WriterException;
import com.google.zxing.client.j2se.BufferedImageLuminanceSource;
import com.google.zxing.client.j2se.MatrixToImageWriter;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.common.HybridBinarizer;

import qgg.extjs.exception.MessageInfoException;

public class BarcodeUtils {

	
	
	public static void saveOneDimeCode(String barcode,OutputStream os){
		
		MultiFormatWriter  multiFormatWriter = new MultiFormatWriter();
		Map<EncodeHintType,Object> hints = new HashMap<EncodeHintType,Object>();
		hints.put(EncodeHintType.CHARACTER_SET, "UTF-8");
		try {
			BitMatrix bitMatrix = multiFormatWriter.encode(barcode, BarcodeFormat.CODE_128 , 300, 120,hints);
			MatrixToImageWriter.writeToStream(bitMatrix, "png", os);
		} catch (WriterException e) {
			throw new MessageInfoException("一维码生成失败");
		} catch (IOException e) {
			throw new MessageInfoException("一维码生成失败");
		}
	}
	
	public static String decodeBarcode(InputStream imgis){
		try {
			BufferedImage image = ImageIO.read(imgis);
			LuminanceSource source = new BufferedImageLuminanceSource(image);
			BinaryBitmap bitmap = new BinaryBitmap(new HybridBinarizer(source));
			Map<DecodeHintType,Object> hints = new HashMap<DecodeHintType,Object>();
			hints.put(DecodeHintType.CHARACTER_SET, "UTF-8");
			Result barresult =  new MultiFormatReader().decode(bitmap, hints);
			return barresult.getText();
		} catch (NotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return null;
	}
	
}
