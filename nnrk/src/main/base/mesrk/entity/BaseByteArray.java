package mesrk.entity;

import javax.persistence.Column;


import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Where;

import qgg.extjs.annotion.ClassExt;
import qgg.extjs.annotion.FieldExt;
import qgg.extjs.annotion.RecordBusinessUniExt;
import qgg.extjs.entity.BaseEntityD;

/***
 * 专门用来存放大文件的表
 * @author Admin
 *
 */
@Entity @ClassExt
@Where(clause = "IS_DELETE_=0")
@Table(name = "BASE_BYTEARRAY")
public class BaseByteArray extends BaseEntityD{
	
	private String recordId;  //属于记录的ID
	private String name;  //名称
	private String desc; //描述
	private Integer sort; //排序
	private Integer type; //0 图片文件
	private byte[] bytes;
	private String originalName;//上传的原文件名称
	
	@FieldExt
	@Column(name = "RECORD_ID_")
	public String getRecordId() {
		return recordId;
	}
	public void setRecordId(String recordId) {
		this.recordId = recordId;
	}
	
	@FieldExt @RecordBusinessUniExt
	@Column(name = "NAME_")
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	@FieldExt
	@Column(name = "DESC_")
	public String getDesc() {
		return desc;
	}
	public void setDesc(String desc) {
		this.desc = desc;
	}
	
	@Column(name = "ORIGINAL_NAME_")
	public String getOriginalName() {
		return originalName;
	}
	public void setOriginalName(String originalName) {
		this.originalName = originalName;
	}
	
	@FieldExt
	@Column(name = "SORT_")
	public Integer getSort() {
		return sort;
	}
	public void setSort(Integer sort) {
		this.sort = sort;
	}
	
	@Column(name = "TYPE_")
	public Integer getType() {
		return type;
	}
	public void setType(Integer type) {
		this.type = type;
	}
	
	@Column(name = "BYTES_")
	public byte[] getBytes() {
		return bytes;
	}
	public void setBytes(byte[] bytes) {
		this.bytes = bytes;
	}
	
}
